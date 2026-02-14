export default function Heatmap({ matrix }) {
  if (!matrix) return null

  const pages = Object.keys(matrix)

  return (
    <div className="mb-24">
      <h2 className="text-2xl font-semibold mb-8">
        Structural Similarity Heatmap
      </h2>

      <div className="bg-[#14151D] p-10 rounded-2xl border border-[#1E1F28] overflow-auto">

        <div className="grid gap-2"
          style={{
            gridTemplateColumns: `200px repeat(${pages.length}, 1fr)`
          }}
        >
          {/* Empty top-left corner */}
          <div></div>

          {/* Column headers */}
          {pages.map((page) => (
            <div
              key={page}
              className="text-xs text-gray-400 text-center break-words px-2"
            >
              {page}
            </div>
          ))}

          {/* Rows */}
          {pages.map((rowPage) => (
            <>
              {/* Row label */}
              <div className="text-xs text-gray-400 break-words pr-4">
                {rowPage}
              </div>

              {pages.map((colPage) => {
                const value =
                  matrix[rowPage]?.[colPage] ??
                  matrix[colPage]?.[rowPage] ??
                  1

                return (
                  <div
                    key={rowPage + colPage}
                    className="h-16 flex items-center justify-center text-xs font-medium rounded-lg"
                    style={{
                      backgroundColor: getHeatColor(value),
                      color: value > 0.6 ? "#000" : "#fff"
                    }}
                  >
                    {value.toFixed(2)}
                  </div>
                )
              })}
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

function getHeatColor(value) {
  if (value > 0.85) return "#FF6B35"
  if (value > 0.65) return "#F97316"
  if (value > 0.4) return "#7C2D12"
  return "#1F1F24"
}
