export default function Gauge({ score }) {
  const percentage = Math.round(score * 100)

  return (
    <div className="bg-gradient-to-br from-card to-[#0F1015] p-10 rounded-2xl border border-border shadow-premium flex flex-col items-center justify-center">
      <div className="relative w-40 h-40">
        <div className="absolute inset-0 rounded-full border-8 border-border"></div>

        <div
          className="absolute inset-0 rounded-full border-8 border-accent transition-all duration-700"
          style={{
            clipPath: `inset(${100 - percentage}% 0 0 0)`
          }}
        ></div>

        <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-accent">
          {percentage}%
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-400 tracking-wide">
        Global Risk Index
      </div>
    </div>
  )
}
