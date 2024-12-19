"use client";
import { ChevronDown, MoveDown } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const data = [
  { name: "Winford Asher", topic: "Cafe A100 for commercial use", status: "New", created: "4/02/2024 12:00 PM" },
  { name: "Josia Love", topic: "Upgrading service plan", status: "New", created: "3/30/2024 7:45 AM" },
  { name: "Harrison Curtis", topic: "Issue with throughput on EspressoMaster", status: "New", created: "3/28/2024 3:30 PM" },
  { name: "Jermaine Berrett", topic: "New roaster in distribution facility", status: "New", created: "3/25/2024 11:05 AM" },
  { name: "Gerald Stephens", topic: "Concerns on current machines", status: "New", created: "3/23/2024 4:50 PM" },
  { name: "Halle Griffiths", topic: "Expanding business", status: "New", created: "3/21/2024 10:20 AM" },
  { name: "Rachel Michael", topic: "Addressing service concerns", status: "New", created: "3/19/2024 1:15 PM" },
  { name: "Alex Baker", topic: "Premium coffee beans", status: "New", created: "3/17/2024 8:00 AM" },
  { name: "Lilly Pyles", topic: "Cafe A100 bulk rate", status: "New", created: "3/13/2024 2:45 PM" },
  { name: "Jane Reyes", topic: "Improving cost per cup", status: "New", created: "3/10/2024 9:30 AM" },
];

const PanelTable = () => {
  const [search, setSearch] = useState("");

  
  const filteredData = data.filter(
    (row) =>
      row.name.toLowerCase().includes(search.toLowerCase()) ||
      row.topic.toLowerCase().includes(search.toLowerCase()) ||
      row.status.toLowerCase().includes(search.toLowerCase())
  );

  
  const clearSearch = () => {
    setSearch("");
  };

  return (
    <div className="p-4 text-gray-600 border-2 rounded-md shadow-md">
     
      <div className="mb-4">
<div className="relative lg:w-1/3 md:w-1/2 w-full">
          <input
            type="text"
            placeholder="Sort, filter and search with copilot"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 pl-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
          
          {search && (
            <button
              onClick={clearSearch}
              className="absolute right-12 top-2.5 text-gray-400"
            >
              X
            </button>
          )}
          <Image
            src="/logo.png"
            width={33}
            height={26}
            alt="Search"
            className="absolute right-3 top-2.5 w-5 h-5 text-gray-400"
          />
        </div>
      </div>

   
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-sm">
          <thead>
            <tr className="text-left bg-gray-50">
              <th className="p-3 border-b border-gray-300"></th>
              <th className="p-3 border-b border-gray-300">
                <div className="flex items-center">
                  Name <ChevronDown className="w-4 h-4" />
                </div>
              </th>
              <th className="p-3 border-b border-gray-300">
                <div className="flex items-center">
                  Topic <ChevronDown className="w-4 h-4" />
                </div>
              </th>
              <th className="p-3 border-b border-gray-300">
                <div className="flex items-center">
                  Status reason <ChevronDown className="w-4 h-4" />
                </div>
              </th>
              <th className="p-3 border-b border-gray-300">
                <div className="flex items-center">
                  Created on <MoveDown strokeWidth={3} className="w-4 h-4" /> <ChevronDown className="w-4 h-4" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 transition">
                <td className="p-3 border-b border-gray-300">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                </td>
                <td className="p-3 border-b text-blue-500 border-gray-300">{row.name}</td>
                <td className="p-3 border-b border-gray-300">{row.topic}</td>
                <td className="p-3 border-b border-gray-300">{row.status}</td>
                <td className="p-3 border-b border-gray-300">{row.created}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PanelTable;
