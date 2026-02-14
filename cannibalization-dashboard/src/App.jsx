import { useState } from "react"
import axios from "axios"

import Heatmap from "./components/Heatmap"
import ConflictTable from "./components/ConflictTable"
import ClusterPanel from "./components/ClusterPanel"
import TopRiskPanel from "./components/TopRiskPanel"
import Recommendations from "./components/Recommendations"
import RiskDistribution from "./components/RiskDistribution"

export default function App() {
  const [file, setFile] = useState(null)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [riskThreshold, setRiskThreshold] = useState(0)

  const handleUpload = async () => {
    if (!file) return

    const formData = new FormData()
    formData.append("file", file)

    try {
      setLoading(true)
      const res = await axios.post("http://127.0.0.1:8000/analyze", formData)
      setData(res.data)
    } catch {
      alert("Backend error. Make sure FastAPI is running.")
    } finally {
      setLoading(false)
    }
  }

  const filteredPairs =
    data?.page_pairs.filter((p) => p.risk >= riskThreshold) || []

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0F] to-[#11121A] text-white px-16 py-12">

      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-2xl font-semibold">
          Cannibalization Intelligence Dashboard
        </h1>

        <div className="flex gap-4 items-center">
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <button
            onClick={handleUpload}
            className="bg-[#FF6B35] px-5 py-2 rounded-lg text-black font-semibold"
          >
            {loading ? "Analyzing..." : "Analyze"}
          </button>
        </div>
      </div>

      {data && (
        <>
          {/* Executive Overview */}
          <div className="grid grid-cols-4 gap-6 mb-10">
            <Card label="Global Risk Index" value={(data.global_index.score * 100).toFixed(0) + "%"} />
            <Card label="Severity" value={data.global_index.severity} />
            <Card label="Avg Similarity" value={data.summary.avg_similarity.toFixed(3)} />
            <Card label="Total Conflicts" value={data.page_pairs.length} />
          </div>

          <RiskDistribution pairs={data.page_pairs} />

          <TopRiskPanel pairs={data.page_pairs} />

          <Heatmap matrix={data.heatmap_matrix} />

          {/* Risk Filter */}
          <div className="mb-6">
            <label className="text-sm text-gray-400 mr-3">
              Minimum Risk Filter:
            </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={riskThreshold}
              onChange={(e) => setRiskThreshold(parseFloat(e.target.value))}
              className="w-64"
            />
            <span className="ml-3 text-sm text-accent">
              {riskThreshold.toFixed(2)}
            </span>
          </div>

          <ConflictTable pairs={filteredPairs} />

          <ClusterPanel
            clusters={data.clusters}
            matrix={data.heatmap_matrix}
          />

          <Recommendations pairs={filteredPairs} />
        </>
      )}
    </div>
  )
}

function Card({ label, value }) {
  return (
    <div className="bg-[#14151D] p-5 rounded-xl border border-[#1E1F28]">
      <div className="text-xs text-gray-400 mb-2">{label}</div>
      <div className="text-xl font-semibold">{value}</div>
    </div>
  )
}
