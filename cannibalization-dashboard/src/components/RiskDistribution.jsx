export default function RiskDistribution({ pairs }) {
  const high = pairs.filter(p => p.risk > 0.5).length
  const mid = pairs.filter(p => p.risk > 0.3 && p.risk <= 0.5).length
  const low = pairs.filter(p => p.risk <= 0.3).length

  const total = pairs.length || 1

  return (
    <div className="mb-8 bg-[#14151D] p-6 rounded-xl border border-[#1E1F28]">
      <h3 className="text-lg mb-4">Risk Distribution</h3>

      <Bar label="High Risk" count={high} total={total} color="#FF3B30" />
      <Bar label="Moderate Risk" count={mid} total={total} color="#FF6B35" />
      <Bar label="Low Risk" count={low} total={total} color="#2E2F3A" />
    </div>
  )
}

function Bar({ label, count, total, color }) {
  const percent = (count / total) * 100

  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span>{count}</span>
      </div>
      <div className="h-3 bg-[#1E1F28] rounded-full">
        <div
          className="h-3 rounded-full"
          style={{ width: percent + "%", backgroundColor: color }}
        />
      </div>
    </div>
  )
}
