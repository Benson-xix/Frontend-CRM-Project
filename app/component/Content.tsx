"use client";
import { 
  BookImage, 
  ChartPie, 
  ChevronDown, 
  ChevronUp, 
  EllipsisVertical, 
  Handshake, 
  Logs, 
  PencilRuler, 
  Plus, 
  Redo2, 
  RotateCw, 
  SlidersHorizontal, 
  Trash 
} from 'lucide-react';
import React, { useState } from 'react';
import Panel from './Panel';
import PanelTable from './PanelTable';

const Content = () => {
  const [isChevronDown, setIsChevronDown] = useState(true);

  const toggleChevron = () => {
    setIsChevronDown(!isChevronDown);
  };

  const toggleChevron2 = () => {
    setIsChevronDown(!isChevronDown);
  };

  return (
    <div className="w-full xl:w-[89%] flex flex-col gap-3 px-4 py-3">
     
      <div className="w-full flex flex-wrap items-center xl:gap-0 gap-3 justify-between h-auto xl:h-[60px] bg-[#EFEFEF] rounded-md shadow-xl xl:px-2 px-3 py-3 xl:py-0">
      
        <button className="flex items-center gap-3 text-gray-900  hover:bg-gray-200 active:bg-gray-300 focus:ring-2 focus:rounded-md focus:ring-blue-500 transition duration-300">
          <p className="font-medium text-sm xl:text-base xl:pl-2 pl-3">My open leads</p>
          <div onClick={toggleChevron} className="flex items-center justify-center">
            {isChevronDown ? (
              <ChevronDown className="w-5 h-5" />
            ) : (
              <ChevronUp className="w-5 h-5" />
            )}
          </div>
        </button>

      
        <div className="flex flex-wrap gap-2 xl:justify-end text-sm items-center text-gray-600">
        
          {[
            { Icon: BookImage, label: "Show Chart" },
            { Icon: Logs, label: "Focused View" },
            { Icon: Plus, label: "New" },
            { Icon: RotateCw, label: "Refresh" },
            { Icon: Handshake, label: "Collaborate" },
          ].map(({ Icon, label }, index) => (
            <button
              key={index}
              className="flex gap-2 items-center px-2 py-1 rounded-md hover:bg-gray-200 active:bg-gray-300 focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              <Icon className="w-5 h-5" />
              <span className="hidden sm:block">{label}</span>
            </button>
          ))}

         
          <button className="flex gap-2 items-center px-2 py-1 text-red-600 rounded-md hover:bg-red-100 active:bg-red-200 focus:ring-2 focus:ring-red-500 transition duration-300">
            <Trash className="w-5 h-5" />
            <span className="hidden sm:block">Delete</span>
          </button>

         
          <div className="h-full flex items-center gap-2">
            <div onClick={toggleChevron2} className="flex items-center justify-center">
              {isChevronDown ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronUp className="w-5 h-5" />
              )}
            </div>
            <EllipsisVertical className="w-5 h-5" />
          </div>

        
          {[
            { Icon: ChartPie, label: "Smart data" },
            { Icon: SlidersHorizontal, label: "Edit filters" },
            { Icon: PencilRuler, label: "Edit columns" },
          ].map(({ Icon, label }, index) => (
            <button
              key={index}
              className="border-2 border-gray-300 px-2 py-1 flex gap-2 items-center rounded-md hover:bg-gray-100 active:bg-gray-200 focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              <Icon className="w-5 h-5" />
              <span className="hidden sm:block">{label}</span>
            </button>
          ))}

      
          <button className="bg-blue-700 px-3 py-1 flex gap-2 items-center rounded-md text-white hover:bg-blue-600 active:bg-blue-800 focus:ring-2 focus:ring-blue-500 transition duration-300">
            <Redo2 className="w-5 h-5" />
            <span className="hidden sm:block">|</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>

      <Panel />
      <PanelTable />
    </div>
  );
};

export default Content;
