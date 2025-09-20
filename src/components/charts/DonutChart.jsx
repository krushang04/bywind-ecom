import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function CustomPieChart({ data }) {
  // Default data if none provided
  const defaultData = [
    { name: "Group A", value: 20, color: "#a2d2ff" },
    { name: "Group B", value: 15, color: "#bde0fe" },
    { name: "Group C", value: 25, color: "#caffbf" },
    { name: "Group D", value: 40, color: "#000000" },
  ];

  const chartData = data || defaultData;

  // Calculate total for percentages
  const total = chartData.reduce((sum, item) => sum + item.value, 0);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const percent = ((payload[0].value / total) * 100).toFixed(1);
      return <div className="bg-black-new-40 text-white px-3 py-2 rounded-lg shadow-md">{percent}%</div>;
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center h-full">
      <PieChart width={160} height={160}>
        <Pie data={chartData} dataKey="value" cx="50%" cy="50%" innerRadius={40} outerRadius={65} paddingAngle={8}>
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>

      {/* Legend */}
      <div className="mt-2 space-y-3 w-full">
        {chartData.map((entry, index) => {
          return (
            <div key={entry.name} className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: entry.color }}></div>
                <span className=" dark:text-gray-300">{entry.name}</span>
              </div>
              <span className=" dark:text-white font-medium text-start">${entry.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
