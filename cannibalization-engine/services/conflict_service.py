from models.page_pair import PagePair

def build_page_pairs(page_profiles, similarity_matrix):

    page_pairs = []

    pages = list(similarity_matrix.keys())

    for i in range(len(pages)):
        for j in range(i + 1, len(pages)):

            page_a = pages[i]
            page_b = pages[j]

            pair = PagePair(page_a, page_b)
            pair.cosine_similarity = similarity_matrix[page_a][page_b]

            queries_a = set(page_profiles[page_a].queries)
            queries_b = set(page_profiles[page_b].queries)

            shared = queries_a.intersection(queries_b)

            if len(shared) > 0:
                pair.query_overlap_ratio = len(shared) / min(len(queries_a), len(queries_b))
            else:
                pair.query_overlap_ratio = 0

            page_pairs.append(pair)

    return page_pairs
