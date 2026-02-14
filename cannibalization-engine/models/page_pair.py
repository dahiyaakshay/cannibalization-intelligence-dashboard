class PagePair:
    def __init__(self, page_a, page_b):
        self.page_a = page_a
        self.page_b = page_b
        self.cosine_similarity = 0
        self.query_overlap_ratio = 0
        self.ranking_conflict_score = 0
        self.click_split_score = 0
        self.final_risk_score = 0
