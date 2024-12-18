import React from 'react'

const RibbonChart = () => {
    return (
      <div className=" flex flex-col justify-end xl:w-[47%] w-full px-4 py-2 font-sans">
      
        <div className="flex w-full items-center justify-between mb-2 text-gray-700 text-sm">
         <div className='flex justify-start w-full md:w-[55%] mb-1 md:mb-0 '>
         <p>1 month until Q4 ends</p>
         </div>
        <div className='flex flex-col md:flex-row justify-between w-full md:w-[45%]'>
        <p className='flex justify-start pl-2'>
          |  Target: <strong>$45 million</strong>
          </p>
          <p className='flex justify-end mt-1 md:mt-0'>68% of target achieved</p>
        </div>
        </div>
  
      
        <div className="relative w-full h-2 flex rounded-xl overflow-hidden bg-gray-200">
          <div
            className="h-full bg-green-500"
            style={{ width: "30%" }}
            title="Won $18m"
          >

          </div>
            <div
            className="h-full bg-blue-500"
            style={{ width: "10%" }}
            title="Committed $8m"
          ></div>
  
          <div
            className="h-full bg-purple-500"
            style={{ width: "8%" }}
            title="Best case $7m"
          ></div>
  
         
          <div
            className="h-full bg-yellow-400"
            style={{ width: "4%" }}
            title="Qualified $3m"
          ></div>
  
          
          <div
            className="h-full bg-gray-400"
            style={{ width: "65%" }}
            title="Leads $75m"
          ></div>
        </div>
  
    
        <div className="flex flex-wrap gap-2 items-center text-xs mt-2 text-gray-600">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-green-500 inline-block rounded-full"></span>
            Won $18m
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-blue-500 inline-block rounded-full"></span>
            Committed $8m
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-purple-500 inline-block rounded-full"></span>
            Best case $7m
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-yellow-400 inline-block rounded-full"></span>
            Qualified $3m
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-gray-400 inline-block rounded-full"></span>
            Leads $75m
          </div>
        </div>
      </div>
    );
  };
  
  export default RibbonChart;
  
