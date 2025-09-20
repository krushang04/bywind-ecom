import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  {
    month: "Jan",
    actuals: 16,
    projections: 4,
  },
  {
    month: "Feb",
    actuals: 20,
    projections: 5,
  },
  {
    month: "Mar",
    actuals: 17,
    projections: 4,
  },
  {
    month: "Apr",
    actuals: 22,
    projections: 6,
  },
  {
    month: "May",
    actuals: 15,
    projections: 3,
  },
  {
    month: "Jun",
    actuals: 20,
    projections: 5,
  },
];

const ProjectionsVsActualsChart = () => {
  // Check if dark mode is active
  const isDarkMode = document.documentElement.classList.contains("dark");

  return (
    <div className="w-full bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 h-full">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Projections vs Actuals</h2>
      <div className="w-full" style={{ height: "200px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: 20,
              bottom: 10,
            }}
            barCategoryGap="25%"
          >
            <CartesianGrid strokeDasharray="none" stroke="#f1f5f9" horizontal={true} vertical={false} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 400 }}
              tickFormatter={(value) => `${value}M`}
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
              dx={-5}
            />
            <Bar dataKey="actuals" stackId="a" fill={isDarkMode ? "#6B7280" : "#A8C5DA"} radius={[0, 0, 0, 0]} />
            <Bar dataKey="projections" stackId="a" fill={isDarkMode ? "#374151" : "#F7F9FB"} radius={[5, 5, 0, 0]} />
            <XAxis dataKey="month" axisLine={{ stroke: "#e5e7eb", strokeWidth: 1 }} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 400 }} dy={5} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProjectionsVsActualsChart;
