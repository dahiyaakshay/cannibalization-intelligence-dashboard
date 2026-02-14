import numpy as np

def aggregate_results(page_profiles, page_pairs, similarity_matrix, clusters):

    total_pages = len(page_profiles)

    # --- Pair Risk Stats ---
    avg_similarity = np.mean([p.cosine_similarity for p in page_pairs]) if page_pairs else 0
    avg_overlap = np.mean([p.query_overlap_ratio for p in page_pairs]) if page_pairs else 0

    # --- Page-Level Risk ---
    page_risk = {}
    for page in page_profiles:
        related_pairs = [p for p in page_pairs if p.page_a == page or p.page_b == page]
        if related_pairs:
            max_risk = max(p.final_risk_score for p in related_pairs)
            page_risk[page] = round(max_risk, 3)
        else:
            page_risk[page] = 0

    # --- Uniqueness Score ---
    uniqueness = {}
    for page in similarity_matrix:
        sims = list(similarity_matrix[page].values())
        if sims:
            uniqueness[page] = round(1 - max(sims), 3)
        else:
            uniqueness[page] = 1

    # --- Global Index ---
    global_index = (
        0.4 * avg_similarity +
        0.3 * avg_overlap +
        0.3 * (sum(1 for p in page_pairs if p.final_risk_score > 0.6) / total_pages if total_pages else 0)
    )

    severity = (
        "Critical" if global_index > 0.75
        else "High" if global_index > 0.5
        else "Moderate" if global_index > 0.25
        else "Low"
    )

    return {
        "global_index": {
            "score": round(global_index, 3),
            "severity": severity
        },
        "summary": {
            "total_pages": total_pages,
            "avg_similarity": round(avg_similarity, 3),
            "avg_query_overlap": round(avg_overlap, 3)
        },
        "page_risk": page_risk,
        "uniqueness": uniqueness,
        "clusters": clusters,
        "page_pairs": [
            {
                "page_a": p.page_a,
                "page_b": p.page_b,
                "similarity": round(p.cosine_similarity, 3),
                "overlap": round(p.query_overlap_ratio, 3),
                "risk": round(p.final_risk_score, 3)
            }
            for p in page_pairs
        ],
        "heatmap_matrix": similarity_matrix
    }
