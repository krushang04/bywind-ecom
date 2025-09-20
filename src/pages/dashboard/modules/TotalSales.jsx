import React, { useMemo } from "react";
import CustomPieChart from "../../../components/charts/DonutChart";
import { useTheme } from "../../../context/ThemeContext";

const TotalSales = () => {
  const { theme } = useTheme();

  // const totalSales = 638.72;

  const salesData = useMemo(
    () => [
      { name: "Direct", value: 300.56, percentage: 47.1, color: theme === "light" ? "#1C1C1C" : "#C6C7F8" },
      { name: "Affiliate", value: 135.18, percentage: 21.2, color: "#95A4FC" },
      { name: "Sponsored", value: 154.02, percentage: 24.1, color: "#B1E3FF" },
      { name: "E-mail", value: 48.96, percentage: 7.7, color: "#BAEDBD" },
    ],
    [theme]
  );

  return (
    <div className="w-full h-80 min-w-[200px] max-w-[272px] p-6 rounded-2xl bg-[#F5F5F5] dark:bg-[#000000] text-black dark:text-white">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Total Sales</h3>
      </div>

      {/* Pie Chart */}
      <div className="flex justify-center flex-1">
        <CustomPieChart data={salesData} />
      </div>
    </div>
  );
};

export default TotalSales;
