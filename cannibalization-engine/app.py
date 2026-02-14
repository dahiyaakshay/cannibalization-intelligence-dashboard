from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

from services.ingestion_service import load_csv
from services.preprocessing_service import preprocess_data
from services.vectorization_service import build_page_vectors
from services.similarity_service import compute_similarity_matrix
from services.conflict_service import build_page_pairs
from services.scoring_service import score_page_pairs
from services.aggregation_service import aggregate_results
from services.recommendation_engine import apply_recommendations
from services.clustering_service import cluster_pages


app = FastAPI(title="Cannibalization Monitoring Engine")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/analyze")
async def analyze(file: UploadFile = File(...)):

    try:
        # 1️⃣ Ingestion
        df = load_csv(file)

        # 2️⃣ Preprocessing
        df_clean, page_profiles = preprocess_data(df)

        if len(page_profiles) < 2:
            raise HTTPException(
                status_code=400,
                detail="Not enough valid pages after filtering. Minimum 2 required."
            )

        # 3️⃣ Vectorization
        page_vectors, vectorizer = build_page_vectors(page_profiles)

        # 4️⃣ Similarity Matrix
        similarity_matrix, pages = compute_similarity_matrix(page_vectors)

        # 5️⃣ Build Page Pairs
        page_pairs = build_page_pairs(page_profiles, similarity_matrix)

        # 6️⃣ Risk Scoring
        scored_pairs = score_page_pairs(page_pairs)

        # 7️⃣ Clustering
        clusters = cluster_pages(page_vectors, n_clusters=2)

        # 8️⃣ Aggregation
        dashboard = aggregate_results(
            page_profiles,
            scored_pairs,
            similarity_matrix,
            clusters
        )

        # 9️⃣ Recommendations
        final_output = apply_recommendations(dashboard)

        return JSONResponse(content=final_output)

    except HTTPException as http_error:
        raise http_error

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Internal engine error: {str(e)}"
        )
