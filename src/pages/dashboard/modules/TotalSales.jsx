import React, { useMemo } from "react";
import CustomPieChart from "../../../components/charts/DonutChart";
import { useTheme } from "../../../context/ThemeContext";

const TotalSales = () => {
  const { theme } = useTheme();

  // const totalSales = 638.72;

  const salesData = useMemo(
    () => [
      { name: "Direct", value: 300.56, percentage: 47.1, color: theme === "light" ? "#1C1C1C" : "#C6C7F8" },
      { name: "Affiliate", value: 135.18, percentage: 21.2, color: "#BAEDBD" },
      { name: "Sponsored", value: 154.02, percentage: 24.1, color: "#95A4FC" },
      { name: "E-mail", value: 48.96, percentage: 7.7, color: "#B1E3FF" },
    ],
    [theme]
  );

  return (
    <div className="w-full h-full p-6 rounded-xl bg-[#F7F9FB] dark:bg-[#000000] text-black-new-100 dark:text-white space-y-4">
      <div className="text-text-md font-semibold">Total Sales</div>

      {/* Pie Chart */}
      <div className="flex justify-center flex-1">
        <CustomPieChart data={salesData} />
      </div>
    </div>
  );
};

export default TotalSales;
