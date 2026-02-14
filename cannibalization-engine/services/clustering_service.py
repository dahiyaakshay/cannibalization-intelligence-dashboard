from sklearn.cluster import KMeans
import numpy as np

def cluster_pages(page_vectors, n_clusters=2):

    pages = list(page_vectors.keys())
    vectors = [page_vectors[p].toarray()[0] for p in pages]

    if len(vectors) < 2:
        return {}

    n_clusters = min(n_clusters, len(pages))

    kmeans = KMeans(n_clusters=n_clusters, random_state=42, n_init="auto")
    labels = kmeans.fit_predict(vectors)

    clusters = {}

    for page, label in zip(pages, labels):
        label = int(label) 

        if label not in clusters:
            clusters[label] = []

        clusters[label].append(page)

    return clusters
