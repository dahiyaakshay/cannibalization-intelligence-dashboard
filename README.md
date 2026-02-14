# 🚨 Cannibalization Intelligence Dashboard

![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?style=flat&logo=fastapi&logoColor=white)
![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=flat&logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Styling-TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Scikit-learn](https://img.shields.io/badge/ML-ScikitLearn-F7931E?style=flat&logo=scikit-learn&logoColor=white)
![Status](https://img.shields.io/badge/Status-Proof--of--Concept-blue)

AI-driven structural cannibalization detection and risk modeling dashboard — a full-stack Proof-of-Concept system for analyzing page similarity, conflict severity, and intent clustering with actionable insights.

---

## 🧠 Overview

This dashboard analyzes page-level similarity and structural overlap to identify:

- Content cannibalization risks  
- Structural duplication patterns  
- Intent clustering conflicts  
- High-risk page pairs  
- Actionable optimization recommendations

This project is built as a Proof-of-Concept and demonstrates practical application of NLP and semantic similarity modeling for SEO structural analysis.

---

## 🏗 Architecture

### Backend

- **FastAPI** – API backend  
- **Pandas** – Data processing  
- **Scikit-learn (TF-IDF & Cosine Similarity)** – Semantic modeling  
- Custom risk scoring and clustering logic

### Frontend

- **React (Vite)** – Frontend framework  
- **TailwindCSS** – Utility-first styling  
- **Axios** – API communication

---

## 🚀 Features

### Risk Intelligence

- Global Risk Index
- Severity classification
- Risk distribution visualization
- Interactive risk filtering

### Structural Analysis

- Pairwise similarity heatmap
- Conflict matrix with severity coloring
- Risk gradient bars

### Clustering Insights

- Intent clusters
- Cluster density score
- Structural uniqueness scores

### Recommendations

- Real data-based action suggestions
- High-risk pair consolidation prompts

---

## 🧩 How It Works

1. Upload an exported Google Search Console CSV  
2. Backend preprocesses page/query data  
3. Pages are vectorized using TF-IDF  
4. Cosine similarity matrix is calculated  
5. Page pairs are scored via risk model  
6. Pages are clustered based on similarity  
7. Frontend visualizes results with charts and tables

---

## 🔧 Backend Setup

```bash
cd cannibalization-engine
pip install -r requirements.txt
uvicorn app:app --reload
```

The backend will be available at:
```
http://127.0.0.1:8000
```

---

## 💻 Frontend Setup

```bash
cd cannibalization-dashboard
npm install
npm run dev
```

The frontend dashboard will be available at:
```
http://localhost:5173
```

---

## 📊 Modeled Metrics

- Global Risk Index
- Page Risk Score
- Similarity Matrix
- Conflict Count
- Cluster Density
- Structural Uniqueness
- Average Similarity
- Query Overlap (if available)

---

## 🧠 Why This Matters

This system demonstrates how structural similarity modeling and vector-based semantic analysis can reveal cannibalization patterns that traditional keyword tools miss, providing deeper insights into content redundancy and optimization clusters.

---

## 🔭 Future Improvements

- Google Search Console API integration
- Historical tracking and trend visualization
- Merge impact simulation modeling
- Internal linking optimization engine
- Entity overlap scoring
- PDF export reporting
- Timeline risk visualization

---

## 🧪 Status

Proof-of-Concept — Fully functional locally.
Designed for experimentation, modeling, and portfolio demonstration..

---

## 📎 License

For demonstration and educational purposes only.

---
