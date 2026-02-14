import { useState } from "react"
import axios from "axios"

export default function useAnalysis() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const analyzeFile = async (file) => {
    if (!file) return

    setLoading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append("file", file)

      const res = await axios.post(
        "http://127.0.0.1:8000/analyze",
        formData
      )

      setData(res.data)
    } catch (err) {
      setError("Analysis failed. Make sure backend is running.")
    }

    setLoading(false)
  }

  return { data, loading, error, analyzeFile }
}
