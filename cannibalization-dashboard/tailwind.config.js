export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0C10",
        card: "#111217",
        border: "#1F212A",
        accent: "#FF6B35",
        low: "#22c55e",
        medium: "#facc15",
        high: "#ef4444"
      },
      boxShadow: {
        premium: "0 20px 60px rgba(0,0,0,0.6)"
      }
    }
  },
  plugins: [],
}
