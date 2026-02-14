export default function TopRiskPanel({ pairs }) {
  if (!pairs || pairs.length === 0) return null

  const sorted = [...pairs].sort((a, b) => b.risk - a.risk)
  const top = sorted.slice(0, 3)

  return (
    <div className="mb-20">
      <h2 className="text-2xl font-semibold mb-8">Top Cannibalization Risks</h2>

      <div className="grid grid-cols-3 gap-10">
        {top.map((pair, i) => (
          <div
            key={i}
            className="bg-[#14151D] p-8 rounded-2xl border border-[#1E1F28]"
          >
            <div className="text-sm text-gray-400 mb-4">
              {pair.page_a} ↔ {pair.page_b}
            </div>

            <div className="flex justify-between text-sm mb-3">
              <span>Similarity</span>
              <span>{pair.similarity.toFixed(3)}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Risk</span>
              <span className="text-accent font-semibold">
                {pair.risk.toFixed(3)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
