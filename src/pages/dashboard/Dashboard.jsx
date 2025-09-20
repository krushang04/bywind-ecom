import React from "react";
import MetricsCards from "./modules/MetricsCards";
import RevenueByLocation from "./modules/RevenueByLocation";
import LineBarChart from "../../components/charts/LineBar";
import ProjectionsVsActualsChart from "../../components/charts/BarChart";
import ProductTable from "./modules/ProductTable";
import TotalSales from "./modules/TotalSales";

const Dashboard = () => (
  <div className="space-y-7">
    <div className="px-2 py-1 font-semibold text-text-md">eCommerce</div>

    {/* First container */}
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-1/2 h-full">
        <MetricsCards />
      </div>
      <div className="w-full lg:w-1/2 h-full">
        <ProjectionsVsActualsChart />
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 items-stretch">
      <div className="lg:col-span-2 h-full">
        <div className="h-full">
          <LineBarChart />
        </div>
      </div>

      {/* Right: Revenue by Location */}
      <div className="lg:col-span-1 h-full">
        <div className="h-full">
          <RevenueByLocation />
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
      {/* Left: Top Selling Products Table */}
      <div className="lg:col-span-2 h-full">
        <div className="h-full">
          <ProductTable />
        </div>
      </div>

      {/* Right: Total Sales Chart */}
      <div className="lg:col-span-1 h-full">
        <div className="h-full">
          {/* <DonutChart /> */}
          <TotalSales />
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
