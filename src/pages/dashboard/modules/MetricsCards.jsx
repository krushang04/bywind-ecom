import React from "react";
import ArrowRise from "../../../assests/ArrowRise.png";
import ArrowFall from "../../../assests/ArrowFall.png";

const MetricCard = React.memo(({ title, value, change, isPositive, bgColor }) => (
  <div className={`p-6 rounded-lg hover:shadow-md transition-shadow duration-200 text-black-new-100`} style={{ background: bgColor }}>
    <h3 className="text-text-md font-semibold text-gray-600 mb-3">{title}</h3>
    <div className="flex items-center justify-between">
      <p className="text-display-xs font-semibold ">{value}</p>
      <div className="flex items-center space-x-1">
        <span className={`text-text-sm `}>{change}</span>
        {isPositive ? <img src={ArrowRise} alt="arrow" /> : <img src={ArrowFall} alt="arrow" />}
      </div>
    </div>
  </div>
));

MetricCard.displayName = "MetricCard";

const MetricsCards = () => {
  const metrics = [
    {
      id: "customers",
      title: "Customers",
      value: "3,781",
      change: "11.01%",
      isPositive: true,
      isHighlighted: true,
      bgColor: "#E3F5FF",
    },
    {
      id: "orders",
      title: "Orders",
      value: "1,219",
      change: "0.03%",
      isPositive: false,
      bgColor: "#F7F9FB",
    },
    {
      id: "revenue",
      title: "Revenue",
      value: "$695",
      change: "15.03%",
      isPositive: true,
      bgColor: "#F7F9FB",
    },
    {
      id: "growth",
      title: "Growth",
      value: "30.1%",
      change: "6.08%",
      isPositive: true,
      bgColor: "#E5ECF6",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 mb-8">
      {metrics.map((metric) => (
        <MetricCard key={metric.id} title={metric.title} value={metric.value} change={metric.change} isPositive={metric.isPositive} bgColor={metric.bgColor} />
      ))}
    </div>
  );
};

export default MetricsCards;
