export default function Recommendations({ pairs }) {
  if (!pairs || pairs.length === 0) return null

  const highRisk = pairs.filter((p) => p.risk > 0.5)

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8">Recommended Actions</h2>

      <div className="bg-[#14151D] p-10 rounded-2xl border border-[#1E1F28]">
        {highRisk.length === 0 && (
          <div className="text-gray-400">
            No high-risk cannibalization detected.
          </div>
        )}

        {highRisk.map((pair, i) => (
          <div key={i} className="mb-6 text-gray-300">
            • Consider consolidating <span className="text-white">{pair.page_a}</span> and{" "}
            <span className="text-white">{pair.page_b}</span> to reduce overlap.
          </div>
        ))}
      </div>
    </div>
  )
}
