# 🚨 Cannibalization Intelligence Dashboard

AI-powered structural cannibalization detection and risk modeling dashboard.

A visually rich Proof-of-Concept system that detects content cannibalization using semantic similarity, clustering, and risk scoring.

---

## 🧠 Overview

This dashboard analyzes page-level similarity and structural overlap to identify:

- Content cannibalization risks
- Structural duplication
- Intent clustering conflicts
- High-risk page pairs
- Optimization opportunities

Built as a standalone Proof-of-Concept (POC).

---

## ⚙️ Tech Stack

**Backend**
- FastAPI
- Pandas
- Scikit-learn
- TF-IDF Vectorization
- Cosine Similarity

**Frontend**
- React (Vite)
- TailwindCSS
- Axios

---

## 📊 Features

### Risk Intelligence Layer
- Global Risk Index
- Severity Classification
- Risk Distribution Visualization
- Page-Level Risk Scoring

### Structural Analysis
- Similarity Heatmap
- Page Conflict Matrix
- Conflict Severity Coloring
- Risk Gradient Bars
- Interactive Risk Filtering

### Clustering Engine
- Intent Clusters
- Cluster Density Score
- Uniqueness Index

### Action Layer
- Recommended Consolidation Suggestions
- Monitoring Recommendations

---

## 🔎 How It Works

1. Upload exported Google Search Console CSV data
2. Pages are vectorized using TF-IDF
3. Pairwise cosine similarity is calculated
4. Conflict risk scores are generated
5. Pages are clustered based on similarity
6. Density and uniqueness metrics are computed
7. Dashboard visualizes risk patterns

---

## 🖥 Backend Setup

```bash
cd cannibalization-engine
pip install -r requirements.txt
uvicorn app:app --reload
```

## Backend

Backend runs at:

http://127.0.0.1:8000


---

## 💻 Frontend Setup

```bash
cd cannibalization-dashboard
npm install
npm run dev
Frontend runs at:

http://localhost:5173
```

## 📈 Modeled Metrics
- Global Risk Index
- Page Risk Score
- Similarity Matrix
- Conflict Count
- Cluster Density
- Structural Uniqueness
- Average Similarity
- Query Overlap (if available)

## 🚀 Future Improvements
- Google Search Console API integration
- Historical cannibalization tracking
- Merge simulation modeling
- Internal linking optimization engine
- Entity overlap scoring
- PDF export reporting
- Timeline risk visualization

## 📌 Project Purpose
This project demonstrates:
- Applied NLP for SEO analysis
- Structural similarity modeling
- Risk scoring systems
- Interactive analytics dashboards
- Full-stack integration (FastAPI + React)

##🧪 Status
Proof-of-Concept — Fully functional locally.

Designed for experimentation, modeling, and portfolio demonstration.

## 📎 License
For demonstration and educational purposes.
---

Once you’ve added this to your repository, tell me:

**README added**

Then we elevate the repository presentation to look like a serious AI product.
---
