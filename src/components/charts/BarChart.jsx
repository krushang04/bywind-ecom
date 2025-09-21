import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { useTheme } from "../../context/ThemeContext";

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
  const { theme } = useTheme();

  return (
    <div className="w-full bg-[#F7F9FB] dark:bg-white-new-5 p-4 rounded-lg shadow-sm h-full">
      <div className="text-text-md font-semibold text-black-new-100 dark:text-white mb-4">Projections vs Actuals</div>
      <div className="w-full" style={{ height: "180px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 10,
            }}
            barCategoryGap="30%"
          >
            <CartesianGrid strokeDasharray="none" stroke={theme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(28, 28, 28, 0.05)"} horizontal={true} vertical={false} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: theme === "dark" ? "rgba(255, 255, 255, 0.4)" : "rgba(28, 28, 28, 0.4)", fontSize: 12, fontWeight: 400 }}
              tickFormatter={(value) => `${value}M`}
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
              dx={0}
              width={40}
            />
            <Bar dataKey="actuals" stackId="a" fill={theme === "dark" ? "#6B7280" : "#A8C5DA"} radius={[0, 0, 0, 0]} />
            <Bar dataKey="projections" stackId="a" fill={theme === "dark" ? "#374151" : "#A8C5DA80"} radius={[5, 5, 0, 0]} />
            <XAxis
              dataKey="month"
              axisLine={{ stroke: theme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(28, 28, 28, 0.05)", strokeWidth: 1 }}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 400 }}
              dy={5}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProjectionsVsActualsChart;
