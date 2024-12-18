import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight, Pencil, SendHorizontal,  Sparkles, ThumbsDown, ThumbsUp, X } from "lucide-react";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

interface PanelModalProps {
  selectedSlide: string | null;  
  closeModal: () => void;
}

const PanelModal: React.FC<PanelModalProps> = ({ selectedSlide, closeModal }) => {
  const [activeButton, setActiveButton] = useState("Engage");

  const handleButtonClick = (buttonName: React.SetStateAction<string>) => {
    setActiveButton(buttonName);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
       
 <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                  }}

                  scrollbar={{
                    el: '.swiper-scrollbar',
                  }}

                pagination={{ 
                    clickable: true,
                      bulletClass: 'swiper-pagination-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active'
                 }}
                className="w-[100%]"
              > 
              

        <SwiperSlide className="w-full relative sm:top-0 top-10  lg:left-[20%]  xl:overflow-y-hidden overflow-y-scroll px-4 lg:px-0">
          <div className="bg-gradient-to-r from-blue-800 via-blue-500 to-purple-500 p-1 rounded-lg lg:w-[70%] w-full lg:h-[95%]">
            <div className="w-full bg-white h-full rounded-lg relative py-7 pt-8 px-5 lg:px-9 overflow-y-scroll lg:overflow-hidden">
              <button
                className="swiper-button-prev-custom absolute left-[-10px] sm:top-[40%] top-[50%] z-10 w-[50px] h-[50px] rounded-full bg-white text-gray-900 flex items-center justify-center shadow-md hover:bg-gray-200"
              >
                <ChevronLeft />
              </button>
              <button
                className="swiper-button-next-custom absolute right-[-10px] sm:top-[40%] top-[50%] z-10 w-[50px] h-[50px] rounded-full bg-white text-gray-900 flex items-center justify-center shadow-md hover:bg-gray-200"
              >
                <ChevronRight />
              </button>
              <button onClick={closeModal} className="absolute top-5 right-4 p-2 text-gray-500">
                <X strokeWidth={3} />
              </button>
              <div className="flex items-center gap-2">
                <Image src="/Email.png" alt="email-image" className="w-8 h-6 mb-4" width={33} height={26} />
                <h2 className="text-sm lg:text-xl font-semibold mb-4">Engage With {selectedSlide}</h2>
              </div>

              <div className="flex flex-col xl:gap-5 ">
                <div className="h-auto border shadow-lg rounded-md p-4 flex items-center gap-3">
                  <Image src="/profile.png" width={50} height={46} alt="profile" className="rounded-full" />
                  <div>
                    <h2 className="text-base lg:text-lg font-semibold text-gray-800">Jane Reyes</h2>
                    <div className="flex gap-3">
                      <Image src="/Linkedin.png" width={33} height={26} alt="LinkedIn" className="w-8 h-6" />
                      |
                      <h2 className="text-sm text-gray-600 font-medium">COO, Northwind Traders</h2>
                    </div>
                  </div>
                </div>

                <div className="w-full h-auto bg-gradient-to-r from-blue-100 to-purple-200 rounded-md flex flex-col xl:flex-row items-center px-3 xl:py-0 py-3 gap-3 justify-between">
                  <div className="flex gap-2">
                    <Sparkles className="w-5 h-5 text-blue-900" />
                    <p className="text-xs md:text-sm text-purple-500">
                      Jane may be interested in upgrading espresso machines for her in-store coffee shops
                    </p>
                  </div>
                  <div className="flex gap-3 xl:justify-end w-full lg:w-auto ">
                    <button className="flex gap-2 bg-gray-50 text-blue-500 p-1 rounded-sm items-center text-sm font-medium">
                      <Pencil className="w-5 h-5" />
                      Edit
                    </button>
                    <button className="flex gap-2 bg-gradient-to-r xs:text-base text-xs from-blue-500 to-purple-600 text-gray-200 p-2 items-center rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500">
                      <SendHorizontal className="w-5 h-5" />
                      Approve and Send
                    </button>
                  </div>
                </div>

                <div className="w-full flex gap-4 border-b-2 shadow-lg px-3 py-2 bg-gray-50">
      <button
        onClick={() => handleButtonClick("Engage")}
        className={`transition-all duration-300 px-4 py-2 rounded-sm text-lg font-semibold 
          ${
            activeButton === "Engage"
              ? "border-b-4 border-b-blue-500 text-blue-500"
              : "border-b-4 border-b-transparent hover:border-b-blue-300 hover:text-blue-300"
          }`}
      >
        Engage
      </button>
      <button
        onClick={() => handleButtonClick("Research")}
        className={`transition-all duration-300 px-4 py-2 rounded-sm text-lg font-semibold 
          ${
            activeButton === "Research"
              ? "border-b-4 border-b-blue-500 text-blue-500"
              : "border-b-4 border-b-transparent hover:border-b-blue-300 hover:text-blue-300"
          }`}
      >
        Research
      </button>
    </div>

                <div className="w-full bg-gray-50 rounded-md shadow-xl xs:flex hidden flex-col p-4 gap-4">
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 relative border rounded-md p-3 gap-4">
                    <h3 className="text-blue-900 font-medium">Why I picked this lead</h3>
                    <Sparkles className="absolute top-1 right-1 w-5 h-5 text-blue-900" />
                    <ul className="list-disc list-inside space-y-2">
                    <li className=" relative gap-3 xl:text-sm text-xs font-medium">Jane is a key decision maker and was browsing&apos;<span className="text-gray-900 font-semibold">espresso machines</span>&apos; on First Coffee&apos;s website. <div className="bg-white w-2 absolute top-0 right-[44%] xl:flex hidden ">1</div></li>
        <li className="relative gap-3 xl:text-sm text-xs font-medium">Multiple people at her company have reported&apos;slowness&apos;during <span className="text-gray-900 font-semibold">service requests</span>. <div className="bg-white w-2 absolute top-0 right-[50%] xl:flex hidden">2</div></li>
        <li className="relative gap-3 xl:text-sm text-xs font-medium">Northwind Traders currently see <span className="text-gray-900 font-semibold">$200M in revenue</span>froom their in-store coffe shops.<div className="bg-white w-2  absolute top-0 right-[44%] xl:flex hidden">3</div></li>
                    </ul>

        <div className="md:grid hidden grid-cols-3  gap-3">
        <div className="w-full h-[70px] flex gap-3 bg-white px-3 py-4 border-2 rounded-lg shadow-lg ">
        <Image src="/good.png" alt="good" width={33} height={26} className="w-[40px] h-[36px]" />
        <div>
            <p className="font-semibold text-xs text-gray-900">Descision maker</p>
            <h3 className="font-semibold text-blue-800 text-lg">Yes</h3>
        </div>
        </div>

        <div className="w-full h-[70px] flex gap-3 bg-white px-3 py-4 border-2 rounded-lg shadow-lg ">
        <Image src="/medal.png" alt="good" width={33} height={26} className="w-[40px] h-[36px]" />
        <div>
            <p className="font-semibold text-[11px] text-gray-900">Potential deal value</p>
            <h3 className="font-semibold text-blue-800 text-lg">$1M</h3>
        </div>
        </div>

        <div className="w-full h-[70px] flex gap-3 bg-white px-3 py-4 border-2 rounded-lg shadow-lg ">
        <Image src="/high.png" alt="good" width={33} height={26} className="w-[40px] h-[36px]" />
        <div>
            <p className="font-semibold text-xs text-gray-900">intent</p>
            <h3 className="font-semibold text-blue-800 text-lg">High</h3>
        </div>
        </div>
        </div>
        </div>

        <div className="w-full md:flex hidden gap-2 justify-between items-center mt-3">
        <div className="flex gap-3 justify-start items-center">
        <div className="flex p-2 bg-gray-200 border-gray-600 border-2 rounded-lg ">
        <Image src="/lovk.png" alt="lock" width={33} height={26}/>
        </div>

        <div className="flex p-1 bg-gray-200 border-2 border-gray-600 rounded-lg items-center gap-2 ">
           <p> 1 </p>
           |
        <Image src="/blue.png" alt="lock" width={33} height={26}/>
       <p className="text-xs xl:text-base"> D3655 Sales</p>
        </div>

        <div className="flex p-2 bg-gray-200 border-2 border-gray-600 rounded-lg ">
        +2
        </div>
        </div>

        <div className="flex gap-3 justify-end items-center">
        <div className="flex p-[4px] bg-gray-200 border-2 border-gray-600 rounded-lg items-center gap-2 ">
          <p className="text-xs text-gray-950 font-semibold">Ai generated content may be incorrected</p>
        </div>
        <ThumbsUp />
        <ThumbsDown />
        </div>
        </div>
        </div>
        <div className="xl:h-[120px] border-b-2 border-l-2 border-r-2 shadow-sm rounded-md  px-4 flex flex-col pb-4 gap-2">          
        <h3 className="font-semibold text-xs xl:text-base text-gray-900">About {selectedSlide}</h3>
        <p className="md:text-sm  text-xs font-medium text-gray-600 ">
        {selectedSlide}, the Chief Operating Officer of Northwind Traders, is a dynamic leader with a proven track record in optimizing operations and enhancing customer expreciences. nder her guidiance, Northwind Traders in-store coffe shops have flourished, becomimg a hallmark of quality and innovation. Jane&apos;s commitment
        to excellence makes her an idea partner for First Coffee. She is always seeking top-tier equipment to elevate her coffee shop&apos;s offerings, ensuring consistent, high-quality service.
        </p>
        </div>
      
    </div>

    <div className="w-full sm:flex hidden gap-3 mt-5 justify-between items-center" >
   <div className="flex justify-start gap-3">
   <p>Showing 1 of 9</p> |
   <button className="text-blue-700 ">Show all</button>
   </div>

   <div className="flex justify-center">

   </div>

   <div className="flex gap-3 justify-end">
   <ThumbsUp className="w-5 h-5" />
   <ThumbsDown className="w-5 h-5" />
   </div>
    </div>
       </div>
             </div>
        </SwiperSlide>
        <SwiperSlide className="w-full relative sm:top-0 top-10  lg:left-[20%]  xl:overflow-y-hidden overflow-y-scroll px-4 lg:px-0">
          <div className="bg-gradient-to-r from-blue-800 via-blue-500 to-purple-500 p-1 rounded-lg lg:w-[70%] w-full lg:h-[95%]">
            <div className="w-full bg-white h-full rounded-lg relative py-7 pt-8 px-5 lg:px-9 overflow-y-scroll lg:overflow-hidden">
              <button
                className="swiper-button-prev-custom absolute left-[-10px] sm:top-[40%] top-[50%] z-10 w-[50px] h-[50px] rounded-full bg-white text-gray-900 flex items-center justify-center shadow-md hover:bg-gray-200"
              >
                <ChevronLeft />
              </button>
              <button
                className="swiper-button-next-custom absolute right-[-10px] sm:top-[40%] top-[50%] z-10 w-[50px] h-[50px] rounded-full bg-white text-gray-900 flex items-center justify-center shadow-md hover:bg-gray-200"
              >
                <ChevronRight />
              </button>
              <button onClick={closeModal} className="absolute top-5 right-4 p-2 text-gray-500">
                <X strokeWidth={3} />
              </button>
              <div className="flex items-center gap-2">
                <Image src="/Email.png" alt="email-image" className="w-8 h-6 mb-4" width={33} height={26} />
                <h2 className="text-sm lg:text-xl font-semibold mb-4">Engage With {selectedSlide}</h2>
              </div>

              <div className="flex flex-col xl:gap-5 ">
                <div className="h-auto border shadow-lg rounded-md p-4 flex items-center gap-3">
                  <Image src="/profile.png" width={50} height={46} alt="profile" className="rounded-full" />
                  <div>
                    <h2 className="text-base lg:text-lg font-semibold text-gray-800">Jane Reyes</h2>
                    <div className="flex gap-3">
                      <Image src="/Linkedin.png" width={33} height={26} alt="LinkedIn" className="w-8 h-6" />
                      |
                      <h2 className="text-sm text-gray-600 font-medium">COO, Northwind Traders</h2>
                    </div>
                  </div>
                </div>

                <div className="w-full h-auto bg-gradient-to-r from-blue-100 to-purple-200 rounded-md flex flex-col xl:flex-row items-center px-3 xl:py-0 py-3 gap-3 justify-between">
                  <div className="flex gap-2">
                    <Sparkles className="w-5 h-5 text-blue-900" />
                    <p className="text-xs md:text-sm text-purple-500">
                      Jane may be interested in upgrading espresso machines for her in-store coffee shops
                    </p>
                  </div>
                  <div className="flex gap-3 xl:justify-end w-full lg:w-auto  ">
                    <button className="flex gap-2 bg-gray-50 text-blue-500 p-1 rounded-sm items-center text-sm font-medium">
                      <Pencil className="w-5 h-5" />
                      Edit
                    </button>
                    <button className="flex gap-2 bg-gradient-to-r xs:text-base text-xs from-blue-500 to-purple-600 text-gray-200 p-2 items-center rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500">
                      <SendHorizontal className="w-5 h-5" />
                      Approve and Send
                    </button>
                  </div>
                </div>

                <div className="w-full flex gap-4 border-b-2 shadow-lg px-3 py-2 bg-gray-50">
      <button
        onClick={() => handleButtonClick("Engage")}
        className={`transition-all duration-300 px-4 py-2 rounded-sm text-lg font-semibold 
          ${
            activeButton === "Engage"
              ? "border-b-4 border-b-blue-500 text-blue-500"
              : "border-b-4 border-b-transparent hover:border-b-blue-300 hover:text-blue-300"
          }`}
      >
        Engage
      </button>
      <button
        onClick={() => handleButtonClick("Research")}
        className={`transition-all duration-300 px-4 py-2 rounded-sm text-lg font-semibold 
          ${
            activeButton === "Research"
              ? "border-b-4 border-b-blue-500 text-blue-500"
              : "border-b-4 border-b-transparent hover:border-b-blue-300 hover:text-blue-300"
          }`}
      >
        Research
      </button>
    </div>

                <div className="w-full bg-gray-50 rounded-md shadow-xl xs:flex hidden flex-col p-4 gap-4">
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 relative border rounded-md p-3 gap-4">
                    <h3 className="text-blue-900 font-medium">Why I picked this lead</h3>
                    <Sparkles className="absolute top-1 right-1 w-5 h-5 text-blue-900" />
                    <ul className="list-disc list-inside space-y-2">
                    <li className=" relative gap-3 xl:text-sm text-xs font-medium">Jane is a key decision maker and was browsing&apos;<span className="text-gray-900 font-semibold">espresso machines</span>&apos; on First Coffee&apos;s website. <div className="bg-white w-2 absolute top-0 right-[44%] xl:flex hidden ">1</div></li>
        <li className="relative gap-3 xl:text-sm text-xs font-medium">Multiple people at her company have reported&apos;slowness&apos;during <span className="text-gray-900 font-semibold">service requests</span>. <div className="bg-white w-2 absolute top-0 right-[50%] xl:flex hidden">2</div></li>
        <li className="relative gap-3 xl:text-sm text-xs font-medium">Northwind Traders currently see <span className="text-gray-900 font-semibold">$200M in revenue</span>froom their in-store coffe shops.<div className="bg-white w-2  absolute top-0 right-[44%] xl:flex hidden">3</div></li>
                    </ul>

        <div className="md:grid hidden grid-cols-3  gap-3">
        <div className="w-full h-[70px] flex gap-3 bg-white px-3 py-4 border-2 rounded-lg shadow-lg ">
        <Image src="/good.png" alt="good" width={33} height={26} className="w-[40px] h-[36px]" />
        <div>
            <p className="font-semibold text-xs text-gray-900">Descision maker</p>
            <h3 className="font-semibold text-blue-800 text-lg">Yes</h3>
        </div>
        </div>

        <div className="w-full h-[70px] flex gap-3 bg-white px-3 py-4 border-2 rounded-lg shadow-lg ">
        <Image src="/medal.png" alt="good" width={33} height={26} className="w-[40px] h-[36px]" />
        <div>
            <p className="font-semibold text-[11px] text-gray-900">Potential deal value</p>
            <h3 className="font-semibold text-blue-800 text-lg">$1M</h3>
        </div>
        </div>

        <div className="w-full h-[70px] flex gap-3 bg-white px-3 py-4 border-2 rounded-lg shadow-lg ">
        <Image src="/high.png" alt="good" width={33} height={26} className="w-[40px] h-[36px]" />
        <div>
            <p className="font-semibold text-xs text-gray-900">intent</p>
            <h3 className="font-semibold text-blue-800 text-lg">High</h3>
        </div>
        </div>
        </div>
        </div>

        <div className="w-full md:flex hidden gap-2 justify-between items-center mt-3">
        <div className="flex gap-3 justify-start items-center">
        <div className="flex p-2 bg-gray-200 border-gray-600 border-2 rounded-lg ">
        <Image src="/lovk.png" alt="lock" width={33} height={26}/>
        </div>

        <div className="flex p-1 bg-gray-200 border-2 border-gray-600 rounded-lg items-center gap-2 ">
           <p> 1 </p>
           |
        <Image src="/blue.png" alt="lock" width={33} height={26}/>
       <p className="text-xs xl:text-base"> D3655 Sales</p>
        </div>

        <div className="flex p-2 bg-gray-200 border-2 border-gray-600 rounded-lg ">
        +2
        </div>
        </div>

        <div className="flex gap-3 justify-end items-center">
        <div className="flex p-[4px] bg-gray-200 border-2 border-gray-600 rounded-lg items-center gap-2 ">
          <p className="text-xs text-gray-950 font-semibold">Ai generated content may be incorrected</p>
        </div>
        <ThumbsUp />
        <ThumbsDown />
        </div>
        </div>
        </div>
        <div className="xl:h-[120px] border-b-2 border-l-2 border-r-2 shadow-sm rounded-md  px-4 flex flex-col pb-4 gap-2">          
        <h3 className="font-semibold text-xs xl:text-base text-gray-900">About {selectedSlide}</h3>
        <p className="md:text-sm  text-xs font-medium text-gray-600 ">
        {selectedSlide}, the Chief Operating Officer of Northwind Traders, is a dynamic leader with a proven track record in optimizing operations and enhancing customer expreciences. nder her guidiance, Northwind Traders in-store coffe shops have flourished, becomimg a hallmark of quality and innovation. Jane&apos;s commitment
        to excellence makes her an idea partner for First Coffee. She is always seeking top-tier equipment to elevate her coffee shop&apos;s offerings, ensuring consistent, high-quality service.
        </p>
        </div>
      
    </div>

    <div className="w-full sm:flex hidden gap-3 mt-5 justify-between items-center" >
   <div className="flex justify-start gap-3">
   <p>Showing 1 of 9</p> |
   <button className="text-blue-700 ">Show all</button>
   </div>

   <div className="flex justify-center">

   </div>

   <div className="flex gap-3 justify-end">
   <ThumbsUp className="w-5 h-5" />
   <ThumbsDown className="w-5 h-5" />
   </div>
    </div>
       </div>
             </div>
        </SwiperSlide>

        <SwiperSlide className="w-full relative sm:top-0 top-10  lg:left-[20%]  xl:overflow-y-hidden overflow-y-scroll px-4 lg:px-0">
          <div className="bg-gradient-to-r from-blue-800 via-blue-500 to-purple-500 p-1 rounded-lg lg:w-[70%] w-full lg:h-[95%]">
            <div className="w-full bg-white h-full rounded-lg relative py-7 pt-8 px-5 lg:px-9 overflow-y-scroll lg:overflow-hidden">
              <button
                className="swiper-button-prev-custom absolute left-[-10px] sm:top-[40%] top-[50%] z-10 w-[50px] h-[50px] rounded-full bg-white text-gray-900 flex items-center justify-center shadow-md hover:bg-gray-200"
              >
                <ChevronLeft />
              </button>
              <button
                className="swiper-button-next-custom absolute right-[-10px] sm:top-[40%] top-[50%] z-10 w-[50px] h-[50px] rounded-full bg-white text-gray-900 flex items-center justify-center shadow-md hover:bg-gray-200"
              >
                <ChevronRight />
              </button>
              <button onClick={closeModal} className="absolute top-5 right-4 p-2 text-gray-500">
                <X strokeWidth={3} />
              </button>
              <div className="flex items-center gap-2">
                <Image src="/Email.png" alt="email-image" className="w-8 h-6 mb-4" width={33} height={26} />
                <h2 className="text-sm lg:text-xl font-semibold mb-4">Engage With {selectedSlide}</h2>
              </div>

              <div className="flex flex-col xl:gap-5 ">
                <div className="h-auto border shadow-lg rounded-md p-4 flex items-center gap-3">
                  <Image src="/profile.png" width={50} height={46} alt="profile" className="rounded-full" />
                  <div>
                    <h2 className="text-base lg:text-lg font-semibold text-gray-800">Jane Reyes</h2>
                    <div className="flex gap-3">
                      <Image src="/Linkedin.png" width={33} height={26} alt="LinkedIn" className="w-8 h-6" />
                      |
                      <h2 className="text-sm text-gray-600 font-medium">COO, Northwind Traders</h2>
                    </div>
                  </div>
                </div>

                <div className="w-full h-auto bg-gradient-to-r from-blue-100 to-purple-200 rounded-md flex flex-col xl:flex-row items-center px-3 xl:py-0 py-3 gap-3 justify-between">
                  <div className="flex gap-2">
                    <Sparkles className="w-5 h-5 text-blue-900" />
                    <p className="text-xs md:text-sm text-purple-500">
                      Jane may be interested in upgrading espresso machines for her in-store coffee shops
                    </p>
                  </div>
                  <div className="flex gap-3 xl:justify-end w-full lg:w-auto ">
                    <button className="flex gap-2 bg-gray-50 text-blue-500 p-1 rounded-sm items-center text-sm font-medium">
                      <Pencil className="w-5 h-5" />
                      Edit
                    </button>
                    <button className="flex gap-2 bg-gradient-to-r xs:text-base text-xs from-blue-500 to-purple-600 text-gray-200 p-2 items-center rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500">
                      <SendHorizontal className="w-5 h-5" />
                      Approve and Send
                    </button>
                  </div>
                </div>

                <div className="w-full flex gap-4 border-b-2 shadow-lg px-3 py-2 bg-gray-50">
      <button
        onClick={() => handleButtonClick("Engage")}
        className={`transition-all duration-300 px-4 py-2 rounded-sm text-lg font-semibold 
          ${
            activeButton === "Engage"
              ? "border-b-4 border-b-blue-500 text-blue-500"
              : "border-b-4 border-b-transparent hover:border-b-blue-300 hover:text-blue-300"
          }`}
      >
        Engage
      </button>
      <button
        onClick={() => handleButtonClick("Research")}
        className={`transition-all duration-300 px-4 py-2 rounded-sm text-lg font-semibold 
          ${
            activeButton === "Research"
              ? "border-b-4 border-b-blue-500 text-blue-500"
              : "border-b-4 border-b-transparent hover:border-b-blue-300 hover:text-blue-300"
          }`}
      >
        Research
      </button>
    </div>

                <div className="w-full bg-gray-50 rounded-md shadow-xl xs:flex hidden flex-col p-4 gap-4">
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 relative border rounded-md p-3 gap-4">
                    <h3 className="text-blue-900 font-medium">Why I picked this lead</h3>
                    <Sparkles className="absolute top-1 right-1 w-5 h-5 text-blue-900" />
                    <ul className="list-disc list-inside space-y-2">
                    <li className=" relative gap-3 xl:text-sm text-xs font-medium">Jane is a key decision maker and was browsing&apos;<span className="text-gray-900 font-semibold">espresso machines</span>&apos; on First Coffee&apos;s website. <div className="bg-white w-2 absolute top-0 right-[44%] xl:flex hidden ">1</div></li>
        <li className="relative gap-3 xl:text-sm text-xs font-medium">Multiple people at her company have reported&apos;slowness&apos;during <span className="text-gray-900 font-semibold">service requests</span>. <div className="bg-white w-2 absolute top-0 right-[50%] xl:flex hidden">2</div></li>
        <li className="relative gap-3 xl:text-sm text-xs font-medium">Northwind Traders currently see <span className="text-gray-900 font-semibold">$200M in revenue</span>froom their in-store coffe shops.<div className="bg-white w-2  absolute top-0 right-[44%] xl:flex hidden">3</div></li>
                    </ul>

        <div className="md:grid hidden grid-cols-3  gap-3">
        <div className="w-full h-[70px] flex gap-3 bg-white px-3 py-4 border-2 rounded-lg shadow-lg ">
        <Image src="/good.png" alt="good" width={33} height={26} className="w-[40px] h-[36px]" />
        <div>
            <p className="font-semibold text-xs text-gray-900">Descision maker</p>
            <h3 className="font-semibold text-blue-800 text-lg">Yes</h3>
        </div>
        </div>

        <div className="w-full h-[70px] flex gap-3 bg-white px-3 py-4 border-2 rounded-lg shadow-lg ">
        <Image src="/medal.png" alt="good" width={33} height={26} className="w-[40px] h-[36px]" />
        <div>
            <p className="font-semibold text-[11px] text-gray-900">Potential deal value</p>
            <h3 className="font-semibold text-blue-800 text-lg">$1M</h3>
        </div>
        </div>

        <div className="w-full h-[70px] flex gap-3 bg-white px-3 py-4 border-2 rounded-lg shadow-lg ">
        <Image src="/high.png" alt="good" width={33} height={26} className="w-[40px] h-[36px]" />
        <div>
            <p className="font-semibold text-xs text-gray-900">intent</p>
            <h3 className="font-semibold text-blue-800 text-lg">High</h3>
        </div>
        </div>
        </div>
        </div>

        <div className="w-full md:flex hidden gap-2 justify-between items-center mt-3">
        <div className="flex gap-3 justify-start items-center">
        <div className="flex p-2 bg-gray-200 border-gray-600 border-2 rounded-lg ">
        <Image src="/lovk.png" alt="lock" width={33} height={26}/>
        </div>

        <div className="flex p-1 bg-gray-200 border-2 border-gray-600 rounded-lg items-center gap-2 ">
           <p> 1 </p>
           |
        <Image src="/blue.png" alt="lock" width={33} height={26}/>
       <p className="text-xs xl:text-base"> D3655 Sales</p>
        </div>

        <div className="flex p-2 bg-gray-200 border-2 border-gray-600 rounded-lg ">
        +2
        </div>
        </div>

        <div className="flex gap-3 justify-end items-center">
        <div className="flex p-[4px] bg-gray-200 border-2 border-gray-600 rounded-lg items-center gap-2 ">
          <p className="text-xs text-gray-950 font-semibold">Ai generated content may be incorrected</p>
        </div>
        <ThumbsUp />
        <ThumbsDown />
        </div>
        </div>
        </div>
        <div className="xl:h-[120px] border-b-2 border-l-2 border-r-2 shadow-sm rounded-md  px-4 flex flex-col pb-4 gap-2">          
        <h3 className="font-semibold text-xs xl:text-base text-gray-900">About {selectedSlide}</h3>
        <p className="md:text-sm  text-xs font-medium text-gray-600 ">
        {selectedSlide}, the Chief Operating Officer of Northwind Traders, is a dynamic leader with a proven track record in optimizing operations and enhancing customer expreciences. nder her guidiance, Northwind Traders in-store coffe shops have flourished, becomimg a hallmark of quality and innovation. Jane&apos;s commitment
        to excellence makes her an idea partner for First Coffee. She is always seeking top-tier equipment to elevate her coffee shop&apos;s offerings, ensuring consistent, high-quality service.
        </p>
        </div>
      
    </div>

    <div className="w-full sm:flex hidden gap-3 mt-5 justify-between items-center" >
   <div className="flex justify-start gap-3">
   <p>Showing 1 of 9</p> |
   <button className="text-blue-700 ">Show all</button>
   </div>

   <div className="flex justify-center">

   </div>

   <div className="flex gap-3 justify-end">
   <ThumbsUp className="w-5 h-5" />
   <ThumbsDown className="w-5 h-5" />
   </div>
    </div>
       </div>
             </div>
        </SwiperSlide>

              </Swiper>
    
    </div>
  );
};

export default PanelModal;
