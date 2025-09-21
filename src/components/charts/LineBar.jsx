import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { useTheme } from "../../context/ThemeContext";
import SectionCard from "../common/SectionCard";
import { getChartColors } from "../../utils/chartTheme";

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
  const { theme } = useTheme();
  const colors = getChartColors(theme);

  return (
    <SectionCard
      title={
        <div className="flex items-center gap-4">
          <span>Revenue</span>
          <span className="text-black-new-20 dark:text-white-new-20">|</span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-text-sm">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: colors.primary }}></div>
              <span>
                Current Week <span className="font-semibold">$58,211</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: colors.secondary }}></div>
              <span className="text-text-sm">
                Previous Week <span className="font-semibold">$68,768</span>
              </span>
            </div>
          </div>
        </div>
      }
      className="flex flex-col h-full"
    >
      <div className="w-full">
        <ResponsiveContainer width="100%" height={260}>
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid stroke={colors.grid} horizontal={true} vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={{ stroke: colors.axisLine, strokeWidth: 1 }}
              tickLine={false}
              tick={{ fill: colors.axis, fontSize: 12, fontWeight: 400 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: colors.axis, fontSize: 12, fontWeight: 400 }}
              tickFormatter={(value) => `${value}M`}
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
              dx={-5}
              width={40}
            />
            <Line type="monotone" dataKey="previousWeek" stroke={colors.secondary} strokeWidth={3} dot={false} activeDot={{ r: 4, fill: "#93C5FD" }} />
            <Line
              type="monotone"
              dataKey="currentWeek"
              stroke={colors.primary}
              strokeWidth={3}
              strokeDasharray="5 5"
              dot={false}
              activeDot={{ r: 4, fill: theme === "dark" ? "#ffffff" : "#000000" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </SectionCard>
  );
};

export default LineBarChart;
