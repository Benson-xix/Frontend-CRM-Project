import React from "react";

const BarChart = () => {
  const data = [
    { label: "Won", value: 18, color: "bg-green-500" },
    { label: "Committed", value: 8, color: "bg-blue-500" },
    { label: "Best Case", value: 7, color: "bg-purple-500" },
    { label: "Qualified", value: 3, color: "bg-yellow-400" },
    { label: "Leads", value: 75, color: "bg-gray-400" },
  ];

  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="flex flex-col items-start xl:w-[47%] w-full px-4 py-4 font-sans">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Revenue Breakdown
      </h2>
      <div className="flex flex-col space-y-4 w-full">
        {data.map((item, index) => (
          <div key={index} className="flex items-center w-full">
            <div className="flex-shrink-0 w-20 text-sm text-gray-600">
              {item.label} (${item.value}m)
            </div>
            <div className="relative w-full h-6 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`absolute top-0 left-0 h-full ${item.color}`}
                style={{ width: `${(item.value / maxValue) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
