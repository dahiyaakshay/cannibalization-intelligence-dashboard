from sklearn.feature_extraction.text import TfidfVectorizer

def build_page_vectors(page_profiles):

    corpus = []
    pages = []

    for page, profile in page_profiles.items():
        if len(profile.queries) == 0:
            continue

        corpus.append(" ".join(profile.queries))
        pages.append(page)

    if len(corpus) < 2:
        raise ValueError("Not enough valid pages after filtering. Need at least 2.")

    # Adaptive min_df
    min_df_value = 2 if len(corpus) > 3 else 1

    vectorizer = TfidfVectorizer(
        ngram_range=(1,3),
        min_df=min_df_value,
        stop_words="english"
    )

    vectors = vectorizer.fit_transform(corpus)

    return dict(zip(pages, vectors)), vectorizer
