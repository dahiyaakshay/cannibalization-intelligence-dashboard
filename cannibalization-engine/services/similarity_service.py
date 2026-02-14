from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

SIMILARITY_THRESHOLD = 0.0  # keep everything for heatmap

def compute_similarity_matrix(page_vectors):

    pages = list(page_vectors.keys())
    vectors = [page_vectors[p] for p in pages]

    if len(vectors) < 2:
        return {}, pages

    stacked = np.vstack([v.toarray() for v in vectors])
    sim_matrix = cosine_similarity(stacked)

    matrix_dict = {}

    for i, page_a in enumerate(pages):
        matrix_dict[page_a] = {}
        for j, page_b in enumerate(pages):
            if i == j:
                continue
            matrix_dict[page_a][page_b] = float(sim_matrix[i][j])

    return matrix_dict, pages
