class PageProfile:
    def __init__(self, page_url):
        self.page_url = page_url
        self.queries = []
        self.total_clicks = 0
        self.total_impressions = 0
        self.avg_position = 0
