// Centralized chart theming for Recharts based on app theme

export const getChartColors = (theme) => ({
  grid: theme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(28, 28, 28, 0.05)",
  axis: theme === "dark" ? "rgba(255, 255, 255, 0.4)" : "rgba(28, 28, 28, 0.4)",
  axisLine: theme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(28, 28, 28, 0.4)",
  primary: theme === "dark" ? "#C6C7F8" : "#000000",
  secondary: "#A8C5DA",
});
