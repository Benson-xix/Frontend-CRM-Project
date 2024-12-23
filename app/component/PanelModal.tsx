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
  const [activeButton, setActiveButton] = useState("Research");

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
                <div className="h-auto border shadow-lg rounded-md p-4 flex items-center gap-3 group relative">
  <Image src="/profile.PNG" alt={'profile-Image'} width={20} height={20} className="inline-block size-8 rounded-full ring-2 ring-white" ></Image>
                  <div>
                    <h2 className="text-base lg:text-lg font-semibold text-gray-800">Jane Reyes</h2>
                    <div className="flex gap-3">
                      <Image src="/Linkedin.png" width={33} height={26} alt="LinkedIn" className="w-8 h-6" />
                      |
                      <h2 className="text-sm text-gray-600 font-medium">COO, Northwind Traders</h2>
                    </div>
                  </div>
                  <div className="absolute xl:top-3 top-0 xl:left-[20%] left-[50%] -translate-x-1/2 bg-gray-900 text-white text-sm py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-lg">
                  Decision Maker
                </div>

                <div className="absolute xl:top-3 top-[5rem] xl:left-[35%] left-[50%] -translate-x-1/2 bg-gray-900 text-white text-sm py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-lg">
                  High Intent
                </div>

                <div className="absolute xl:top-3 top-[8rem] xl:left-[55%]  left-[50%] -translate-x-1/2 bg-gray-900 text-white text-sm py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-lg">
                 $1M Potential deal Value
                </div>
                </div>

               

                <div className="w-full h-auto bg-gradient-to-r from-blue-100 to-purple-200 rounded-md flex flex-col xl:flex-row items-center px-3 py-3 gap-3 justify-between">
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
          onClick={() => handleButtonClick('Engage')}
          className={`transition-all duration-300 px-4 py-2 rounded-sm text-lg font-semibold 
            ${activeButton === 'Engage'
              ? 'border-b-4 border-b-blue-500 text-blue-500'
              : 'border-b-4 border-b-transparent hover:border-b-blue-300 hover:text-blue-300'}`}
        >
          Engage
        </button>
        <button
          onClick={() => handleButtonClick('Research')}
          className={`transition-all duration-300 px-4 py-2 rounded-sm text-lg font-semibold 
            ${activeButton === 'Research'
              ? 'border-b-4 border-b-blue-500 text-blue-500'
              : 'border-b-4 border-b-transparent hover:border-b-blue-300 hover:text-blue-300'}`}
        >
          Research
        </button>
      </div>

     
      <div className="w-full bg-gray-50 rounded-md shadow-xl xs:flex hidden flex-col p-4 gap-4">
        {activeButton === 'Research' && (
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 relative border rounded-md p-3 gap-4">
            <h3 className="text-blue-900 font-medium">Why I picked this lead</h3>
            <Sparkles className="absolute top-1 right-1 w-5 h-5 text-blue-900" />
            <ul className="list-disc list-inside space-y-2">
              <li className="xl:flex gap-3 xl:text-sm text-xs font-medium">
                Jane is a key decision maker and was browsing&apos;
                <span className="text-gray-900 font-semibold">espresso machines</span>
                &apos; on First Coffee&apos;s website. 
              </li>
              <li className="xl:flex gap-3 xl:text-sm text-xs font-medium">
                Multiple people at her company have reported&apos;slowness&apos;during
                <span className="text-gray-900 font-semibold">service requests</span>.
              </li>
              <li className="xl:flex gap-3 xl:text-sm text-xs font-medium">
                Northwind Traders currently see
                <span className="text-gray-900 font-semibold">$200M in revenue</span> from their in-store coffee shops.
              </li>
            </ul>

            
            <div className="md:grid hidden grid-cols-3 gap-3">
              {[
                {
                  image: '/good.png',
                  alt: 'good',
                  label: 'Decision maker',
                  value: 'Yes',
                  tooltip: 'This person has the authority to make decisions.',
                },
                {
                  image: '/medal.png',
                  alt: 'deal',
                  label: 'Potential deal value',
                  value: '$1M',
                  tooltip: 'This deal could be worth up to $1M.',
                },
                {
                  image: '/high.png',
                  alt: 'intent',
                  label: 'Intent',
                  value: 'High',
                  tooltip: 'This person has shown high interest.',
                },
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-lg">
                    {item.tooltip}
                  </div>
                  <div className="w-full h-[70px] flex gap-3 bg-white px-3 py-4 border-2 rounded-lg shadow-lg">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={33}
                      height={26}
                      className="w-[40px] h-[36px]"
                    />
                    <div>
                      <p className="font-semibold text-xs text-gray-900">{item.label}</p>
                      <h3 className="font-semibold text-blue-800 text-lg">{item.value}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeButton === 'Engage' && (
          <div className="w-full bg-gray-50 p-4">
            
            <h3 className="text-xl font-semibold text-blue-900">Engage Content</h3>
            <p>This is the content shown when the Engage button is active.</p>
          </div>
        )}
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
                <div className="h-auto border shadow-lg rounded-md p-4 flex items-center gap-3 group relative">
                  <Image src="/profile.PNG" width={50} height={46} alt="profile" className="rounded-full" />
                  <div>
                    <h2 className="text-base lg:text-lg font-semibold text-gray-800">Jane Reyes</h2>
                    <div className="flex gap-3">
                      <Image src="/Linkedin.png" width={33} height={26} alt="LinkedIn" className="w-8 h-6" />
                      |
                      <h2 className="text-sm text-gray-600 font-medium">COO, Northwind Traders</h2>
                    </div>
                  </div>
                  <div className="absolute xl:top-3 top-0 xl:left-[20%] left-[50%] -translate-x-1/2 bg-gray-900 text-white text-sm py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-lg">
                  Decision Maker
                </div>

                <div className="absolute xl:top-3 top-[5rem] xl:left-[35%] left-[50%] -translate-x-1/2 bg-gray-900 text-white text-sm py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-lg">
                  High Intent
                </div>

                <div className="absolute xl:top-3 top-[8rem] xl:left-[55%]  left-[50%] -translate-x-1/2 bg-gray-900 text-white text-sm py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-lg">
                 $1M Potential deal Value
                </div>
                </div>

               

                <div className="w-full h-auto bg-gradient-to-r from-blue-100 to-purple-200 rounded-md flex flex-col xl:flex-row items-center px-3 py-3 gap-3 justify-between">
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
          onClick={() => handleButtonClick('Engage')}
          className={`transition-all duration-300 px-4 py-2 rounded-sm text-lg font-semibold 
            ${activeButton === 'Engage'
              ? 'border-b-4 border-b-blue-500 text-blue-500'
              : 'border-b-4 border-b-transparent hover:border-b-blue-300 hover:text-blue-300'}`}
        >
          Engage
        </button>
        <button
          onClick={() => handleButtonClick('Research')}
          className={`transition-all duration-300 px-4 py-2 rounded-sm text-lg font-semibold 
            ${activeButton === 'Research'
              ? 'border-b-4 border-b-blue-500 text-blue-500'
              : 'border-b-4 border-b-transparent hover:border-b-blue-300 hover:text-blue-300'}`}
        >
          Research
        </button>
      </div>

     
      <div className="w-full bg-gray-50 rounded-md shadow-xl xs:flex hidden flex-col p-4 gap-4">
        {activeButton === 'Research' && (
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 relative border rounded-md p-3 gap-4">
            <h3 className="text-blue-900 font-medium">Why I picked this lead</h3>
            <Sparkles className="absolute top-1 right-1 w-5 h-5 text-blue-900" />
            <ul className="list-disc list-inside space-y-2">
              <li className="xl:flex gap-3 xl:text-sm text-xs font-medium">
                Jane is a key decision maker and was browsing&apos;
                <span className="text-gray-900 font-semibold">espresso machines</span>
                &apos; on First Coffee&apos;s website. 
              </li>
              <li className="xl:flex gap-3 xl:text-sm text-xs font-medium">
                Multiple people at her company have reported&apos;slowness&apos;during
                <span className="text-gray-900 font-semibold">service requests</span>.
              </li>
              <li className="xl:flex gap-3 xl:text-sm text-xs font-medium">
                Northwind Traders currently see
                <span className="text-gray-900 font-semibold">$200M in revenue</span> from their in-store coffee shops.
              </li>
            </ul>

            
            <div className="md:grid hidden grid-cols-3 gap-3">
              {[
                {
                  image: '/good.png',
                  alt: 'good',
                  label: 'Decision maker',
                  value: 'Yes',
                  tooltip: 'This person has the authority to make decisions.',
                },
                {
                  image: '/medal.png',
                  alt: 'deal',
                  label: 'Potential deal value',
                  value: '$1M',
                  tooltip: 'This deal could be worth up to $1M.',
                },
                {
                  image: '/high.png',
                  alt: 'intent',
                  label: 'Intent',
                  value: 'High',
                  tooltip: 'This person has shown high interest.',
                },
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-lg">
                    {item.tooltip}
                  </div>
                  <div className="w-full h-[70px] flex gap-3 bg-white px-3 py-4 border-2 rounded-lg shadow-lg">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={33}
                      height={26}
                      className="w-[40px] h-[36px]"
                    />
                    <div>
                      <p className="font-semibold text-xs text-gray-900">{item.label}</p>
                      <h3 className="font-semibold text-blue-800 text-lg">{item.value}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeButton === 'Engage' && (
          <div className="w-full bg-gray-50 p-4">
            
            <h3 className="text-xl font-semibold text-blue-900">Engage Content</h3>
            <p>This is the content shown when the Engage button is active.</p>
          </div>
        )}
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
                <div className="h-auto border shadow-lg rounded-md p-4 flex items-center gap-3 group relative">
                  <Image src="/profile.PNG" width={50} height={46} alt="profile" className="rounded-full" />
                  <div>
                    <h2 className="text-base lg:text-lg font-semibold text-gray-800">Jane Reyes</h2>
                    <div className="flex gap-3">
                      <Image src="/Linkedin.png" width={33} height={26} alt="LinkedIn" className="w-8 h-6" />
                      |
                      <h2 className="text-sm text-gray-600 font-medium">COO, Northwind Traders</h2>
                    </div>
                  </div>
                  <div className="absolute xl:top-3 top-0 xl:left-[20%] left-[50%] -translate-x-1/2 bg-gray-900 text-white text-sm py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-lg">
                  Decision Maker
                </div>

                <div className="absolute xl:top-3 top-[5rem] xl:left-[35%] left-[50%] -translate-x-1/2 bg-gray-900 text-white text-sm py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-lg">
                  High Intent
                </div>

                <div className="absolute xl:top-3 top-[8rem] xl:left-[55%]  left-[50%] -translate-x-1/2 bg-gray-900 text-white text-sm py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-lg">
                 $1M Potential deal Value
                </div>
                </div>

               

                <div className="w-full h-auto bg-gradient-to-r from-blue-100 to-purple-200 rounded-md flex flex-col xl:flex-row items-center px-3 py-3 gap-3 justify-between">
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
          onClick={() => handleButtonClick('Engage')}
          className={`transition-all duration-300 px-4 py-2 rounded-sm text-lg font-semibold 
            ${activeButton === 'Engage'
              ? 'border-b-4 border-b-blue-500 text-blue-500'
              : 'border-b-4 border-b-transparent hover:border-b-blue-300 hover:text-blue-300'}`}
        >
          Engage
        </button>
        <button
          onClick={() => handleButtonClick('Research')}
          className={`transition-all duration-300 px-4 py-2 rounded-sm text-lg font-semibold 
            ${activeButton === 'Research'
              ? 'border-b-4 border-b-blue-500 text-blue-500'
              : 'border-b-4 border-b-transparent hover:border-b-blue-300 hover:text-blue-300'}`}
        >
          Research
        </button>
      </div>

     
      <div className="w-full bg-gray-50 rounded-md shadow-xl xs:flex hidden flex-col p-4 gap-4">
        {activeButton === 'Research' && (
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 relative border rounded-md p-3 gap-4">
            <h3 className="text-blue-900 font-medium">Why I picked this lead</h3>
            <Sparkles className="absolute top-1 right-1 w-5 h-5 text-blue-900" />
            <ul className="list-disc list-inside space-y-2">
              <li className="xl:flex gap-3 xl:text-sm text-xs font-medium">
                Jane is a key decision maker and was browsing&apos;
                <span className="text-gray-900 font-semibold">espresso machines</span>
                &apos; on First Coffee&apos;s website. 
              </li>
              <li className="xl:flex gap-3 xl:text-sm text-xs font-medium">
                Multiple people at her company have reported&apos;slowness&apos;during
                <span className="text-gray-900 font-semibold">service requests</span>.
              </li>
              <li className="xl:flex gap-3 xl:text-sm text-xs font-medium">
                Northwind Traders currently see
                <span className="text-gray-900 font-semibold">$200M in revenue</span> from their in-store coffee shops.
              </li>
            </ul>

            
            <div className="md:grid hidden grid-cols-3 gap-3">
              {[
                {
                  image: '/good.png',
                  alt: 'good',
                  label: 'Decision maker',
                  value: 'Yes',
                  tooltip: 'This person has the authority to make decisions.',
                },
                {
                  image: '/medal.png',
                  alt: 'deal',
                  label: 'Potential deal value',
                  value: '$1M',
                  tooltip: 'This deal could be worth up to $1M.',
                },
                {
                  image: '/high.png',
                  alt: 'intent',
                  label: 'Intent',
                  value: 'High',
                  tooltip: 'This person has shown high interest.',
                },
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-lg">
                    {item.tooltip}
                  </div>
                  <div className="w-full h-[70px] flex gap-3 bg-white px-3 py-4 border-2 rounded-lg shadow-lg">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={33}
                      height={26}
                      className="w-[40px] h-[36px]"
                    />
                    <div>
                      <p className="font-semibold text-xs text-gray-900">{item.label}</p>
                      <h3 className="font-semibold text-blue-800 text-lg">{item.value}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeButton === 'Engage' && (
          <div className="w-full bg-gray-50 p-4">
            
            <h3 className="text-xl font-semibold text-blue-900">Engage Content</h3>
            <p>This is the content shown when the Engage button is active.</p>
          </div>
        )}
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
