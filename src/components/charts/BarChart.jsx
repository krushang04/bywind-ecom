import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { useTheme } from "../../context/ThemeContext";
import SectionCard from "../common/SectionCard";
import { getChartColors } from "../../utils/chartTheme";

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
  const { theme } = useTheme();
  const colors = getChartColors(theme);

  return (
    <SectionCard title="Projections vs Actuals" className="h-full pb-6 flex flex-col gap-1">
      <div className="w-full h-[248px] lg:h-[178px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 0,
              left: -5,
              bottom: 0,
            }}
            barCategoryGap="30%"
          >
            <CartesianGrid strokeDasharray="none" stroke={colors.grid} horizontal={true} vertical={false} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: colors.axis, fontSize: 12, fontWeight: 400 }}
              tickFormatter={(value) => `${value}M`}
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
              dx={0}
              width={40}
            />
            <Bar dataKey="actuals" stackId="a" fill={theme === "dark" ? "#6B7280" : colors.secondary} radius={[0, 0, 0, 0]} />
            <Bar dataKey="projections" stackId="a" fill={theme === "dark" ? "#374151" : "#A8C5DA80"} radius={[5, 5, 0, 0]} />
            <XAxis dataKey="month" axisLine={{ stroke: colors.axisLine, strokeWidth: 1 }} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 400 }} dy={5} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </SectionCard>
  );
};

export default ProjectionsVsActualsChart;
