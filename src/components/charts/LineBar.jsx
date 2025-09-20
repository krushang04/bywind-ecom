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
    <div className="w-full bg-[#F7F9FB] dark:bg-zinc-800 p-6 rounded-lg flex flex-col h-full">
      <div className="flex items-center gap-4 flex-shrink-0 mb-4">
        <div className="text-text-md font-semibold text-black-new-100 dark:text-white">Revenue</div>
        <div className="text-text-md font-semibold text-black-new-20 dark:text-white">|</div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-text-sm">
            <div className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full"></div>
            <span className=" text-black-new-100 dark:text-gray-300">
              Current Week <span className="font-semibold">$58,211</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#A8C5DA] rounded-full"></div>
            <span className="text-text-sm text-black-new-100 dark:text-gray-300">
              Previous Week <span className="font-semibold">$68,768</span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid stroke="#eaecf0" horizontal={true} vertical={false} />
            <XAxis dataKey="month" axisLine={{ stroke: "#e5e7eb", strokeWidth: 1 }} tickLine={false} tick={{ fill: "#1C1C1C66", fontSize: 12, fontWeight: 400 }} dy={10} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#1C1C1C66", fontSize: 12, fontWeight: 400 }}
              tickFormatter={(value) => `${value}M`}
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
              dx={-5}
              width={40}
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
