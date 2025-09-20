import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  {
    month: "Jan",
    currentWeek: 13,
    previousWeek: 8,
  },
  {
    month: "Feb",
    currentWeek: 8,
    previousWeek: 17,
  },
  {
    month: "Mar",
    currentWeek: 9,
    previousWeek: 16,
  },
  {
    month: "Apr",
    currentWeek: 15,
    previousWeek: 12,
  },
  {
    month: "May",
    currentWeek: 20,
    previousWeek: 10,
  },
  {
    month: "Jun",
    currentWeek: 19,
    previousWeek: 23,
  },
];

const LineBarChart = () => {
  // Check if dark mode is active
  const isDarkMode = document.documentElement.classList.contains("dark");

  return (
    <div className="w-full bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md h-96">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Revenue</h2>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-black dark:bg-white rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Current Week <span className="font-semibold">$58,211</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Previous Week <span className="font-semibold">$68,768</span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 40,
              left: 40,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="none" stroke="#f1f5f9" horizontal={true} vertical={false} />
            <XAxis dataKey="month" axisLine={{ stroke: "#e5e7eb", strokeWidth: 1 }} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 14, fontWeight: 400 }} dy={10} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 14, fontWeight: 400 }}
              tickFormatter={(value) => `${value}M`}
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
              dx={-10}
            />
            <Line type="monotone" dataKey="previousWeek" stroke="#93C5FD" strokeWidth={3} dot={false} activeDot={{ r: 4, fill: "#93C5FD" }} />
            <Line
              type="monotone"
              dataKey="currentWeek"
              stroke={isDarkMode ? "#ffffff" : "#000000"}
              strokeWidth={3}
              strokeDasharray="5 5"
              dot={false}
              activeDot={{ r: 4, fill: isDarkMode ? "#ffffff" : "#000000" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineBarChart;
