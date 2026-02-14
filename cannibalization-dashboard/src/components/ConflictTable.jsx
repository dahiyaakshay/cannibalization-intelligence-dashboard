export default function ConflictTable({ pairs }) {
  if (!pairs.length) return null

  return (
    <div className="mb-10 bg-[#14151D] p-6 rounded-xl border border-[#1E1F28]">
      <h3 className="text-lg mb-4">Page Conflict Matrix</h3>

      <table className="w-full text-sm">
        <thead className="text-gray-400">
          <tr>
            <th className="text-left">Page A</th>
            <th className="text-left">Page B</th>
            <th>Similarity</th>
            <th>Risk</th>
          </tr>
        </thead>
        <tbody>
          {pairs.map((p, i) => (
            <tr key={i} className="border-t border-[#1E1F28]">
              <td className="py-2">{p.page_a}</td>
              <td>{p.page_b}</td>
              <td className="text-center">{p.similarity.toFixed(2)}</td>
              <td className="text-center">
                <div className="flex items-center justify-center">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${p.risk * 100}px`,
                      backgroundColor:
                        p.risk > 0.5
                          ? "#FF3B30"
                          : p.risk > 0.3
                          ? "#FF6B35"
                          : "#2E2F3A"
                    }}
                  />
                  <span className="ml-2">{p.risk.toFixed(2)}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
