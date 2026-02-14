export default function ClusterPanel({ clusters, matrix }) {
  const computeDensity = (pages) => {
    let total = 0
    let count = 0

    pages.forEach((a) => {
      pages.forEach((b) => {
        if (a !== b) {
          total += matrix[a]?.[b] || matrix[b]?.[a] || 0
          count++
        }
      })
    })

    return count ? (total / count).toFixed(2) : 0
  }

  return (
    <div className="mb-10">
      <h3 className="text-lg mb-4">Intent Clusters</h3>

      <div className="grid grid-cols-2 gap-6">
        {Object.entries(clusters).map(([id, pages]) => (
          <div
            key={id}
            className="bg-[#14151D] p-6 rounded-xl border border-[#1E1F28]"
          >
            <div className="flex justify-between mb-3">
              <span>Cluster {id}</span>
              <span className="text-sm text-gray-400">
                Density: {computeDensity(pages)}
              </span>
            </div>

            {pages.map((page) => (
              <div key={page} className="text-sm text-gray-300 py-1">
                {page}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
