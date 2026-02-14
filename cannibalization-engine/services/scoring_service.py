def score_page_pairs(page_pairs):

    for pair in page_pairs:

        pair.ranking_conflict_score = min(1, pair.cosine_similarity * 0.8)
        pair.click_split_score = min(1, pair.query_overlap_ratio * 0.7)

        pair.final_risk_score = (
            0.45 * pair.cosine_similarity +
            0.30 * pair.query_overlap_ratio +
            0.15 * pair.ranking_conflict_score +
            0.10 * pair.click_split_score
        )

    return page_pairs
