from models.page_profile import PageProfile
from utils.text_cleaning import clean_query

MIN_IMPRESSIONS = 10
MIN_QUERIES_PER_PAGE = 2
BRAND_TERMS = ["yourbrand"]  # Replace dynamically if needed

def preprocess_data(df):

    df = df[df["impressions"] >= MIN_IMPRESSIONS]
    df["query"] = df["query"].apply(clean_query)

    for term in BRAND_TERMS:
        df = df[~df["query"].str.contains(term)]

    page_profiles = {}

    for _, row in df.iterrows():
        page = row["page"]

        if page not in page_profiles:
            page_profiles[page] = PageProfile(page)

        profile = page_profiles[page]
        profile.queries.append(row["query"])
        profile.total_clicks += row["clicks"]
        profile.total_impressions += row["impressions"]
        profile.avg_position = row["position"]

    page_profiles = {
        k: v for k, v in page_profiles.items()
        if len(v.queries) >= MIN_QUERIES_PER_PAGE
    }

    return df, page_profiles
