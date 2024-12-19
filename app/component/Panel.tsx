
"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import RibbonChart from './RibbonChart'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CalendarDays, ChevronLeft, ChevronRight, ChevronUp, Mail, Sparkles } from 'lucide-react';
import PanelModal from './PanelModal';

const Panel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState<string | null>(null);

  const handleSlideClick = (slide: string) => {
    setSelectedSlide(slide); 
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSlide(null); 
  };
  return (
    <div className='w-full  border-2 rounded-2xl xl:h-[470px] shadow-2xl p-[3px] bg-gradient-to-r from-blue-800 via-blue-500 to-purple-500 '>
      <div className='w-[100%] bg-white text-gray-600 h-full rounded-2xl px-3 py-4 flex flex-col'>
            <div className='flex flex-col xl:flex-row   w-full '>
            <div className='flex sm:flex-row flex-col gap-2 xl:w-[50%] w-full items-center'>
            <Image className='w-[40px] h-[40px]' src='/logo.png' alt='logo 'width={33} height={26}></Image>
            <h1 className='font-semibold text-gray-950 md:text-lg text-base '>Hi Mona, <span className='text-blue-950'>68%</span>of goal achieved and rest can be achieved by focusing on 20 top leads.</h1>
            </div>
            <RibbonChart/>
            <ChevronUp/>
            </div>

            <div className='flex flex-col xl:flex-row  w-full px-2 p-3 mt-5 gap-2 justify-between  '>
                <div className='px-2 xl:w-[65%] w-full  flex flex-col'>
                    <h2 className='font-medium text-sm sm:text-base'>Copilot has pinpointed 20 key leads that show strong purchase intent and are actively engaging. these leads need your focus</h2>
                    
                    <div className='w-full relative  flex gap-3 py-3 '>
                    <button className="swiper-button-prev-custom absolute left-[-10px] top-[40%] z-10 w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-md hover:bg-gray-200">
                <ChevronLeft />
              </button>
              <button className="swiper-button-next-custom absolute right-[-10px] top-[40%] z-10 w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-md hover:bg-gray-200">
                <ChevronRight />
              </button>
                    <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  2560: { slidesPerView: 3 },
                  768: { slidesPerView: 2 },
                  640: { slidesPerView: 1 },
                }}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                pagination={{
                  clickable: true,
                  bulletClass: "swiper-pagination-bullet",
                  bulletActiveClass: "swiper-pagination-bullet-active",
                }}
                className="w-full"
              >
              
               <SwiperSlide onClick={() => handleSlideClick("Jane Reyes")}>
              <div
                className="relative group h-[250px] border-b-2 border-l-2 border-r-2 shadow-sm rounded-md p-4 flex flex-col justify-between"
              >
                <div className="flex items-center gap-2">
                <Image src="/profile.PNG" alt={'profile-Image'} width={20} height={20} className="inline-block size-8 rounded-full ring-2 ring-white" ></Image>
                  <div>
                    <h3 className="font-semibold text-gray-900">Jane Reyes</h3>
                    <p className="md:text-sm text-xs text-gray-500">
                      COO • Northwind Traders
                    </p>
                  </div>
                </div>
                <div className="bg-blue-100 px-2 py-3 rounded-lg">
                  <div className="flex gap-2 items-center">
                    <Mail className="w-4 h-4" />
                    <h4 className="font-medium md:text-base text-xs text-gray-800 mb-1">
                      Engage with Jane Reyes
                    </h4>
                  </div>
                  <p className="md:text-sm text-xs text-gray-600">
                    Jane may be interested in upgrading espresso machines for her in-store coffee shops.
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Expand business • High buying intent
                </p>

              
                <div
                  className="absolute hidden group-hover:block  left-1/2 transform -translate-x-1/2 mb-2 w-max bg-black text-white text-xs rounded px-2 py-1 shadow-lg"
                >
                  High buying intent: Upgrade espresso machines
                </div>
              </div>
          </SwiperSlide>

            <SwiperSlide onClick={() => handleSlideClick("Jane Reyes")}>
              <div
                className="relative group h-[250px] border-b-2 border-l-2 border-r-2 shadow-sm rounded-md p-4 flex flex-col justify-between"
              >
                <div className="flex items-center gap-2">
                <Image src="/profile.PNG" alt={'profile-Image'} width={20} height={20} className="inline-block size-8 rounded-full ring-2 ring-white" ></Image>
                  <div>
                    <h3 className="font-semibold text-gray-900">Allan Munger</h3>
                    <p className="md:text-sm text-xs text-gray-500">
                      Head of Real Estate • Contoso Coffee
                    </p>
                  </div>
                </div>
                <div className="bg-blue-100 px-2 py-3 rounded-lg">
                  <div className="flex gap-2 items-center">
                    <CalendarDays className="w-4 h-4" />
                    <h4 className="font-medium md:text-base text-xs text-gray-800 mb-1">
                      Prepare for meeting with Allan
                    </h4>
                  </div>
                  <p className="md:text-sm text-xs text-gray-600">
                    Prepare for a high-buying intent meeting Copilot scheduled for 2 PM regarding upgrading the service contract.
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Upcoming meeting • Due today
                </p>

                
                <div
                  className="absolute hidden group-hover:block bottom left-1/2 transform -translate-x-1/2 mb-2 w-max bg-black text-white text-xs rounded px-2 py-1 shadow-lg"
                >
                  Meeting at 2 PM: Upgrade service contract
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide onClick={() => handleSlideClick("Jane Reyes")}>
              <div
                className="relative group h-[250px] border-b-2 border-l-2 border-r-2 shadow-sm rounded-md p-4 flex flex-col justify-between"
              >
                <div className="flex items-center gap-2">
                <Image src="/profile.PNG" alt={'profile-Image'} width={20} height={20} className="inline-block size-8 rounded-full ring-2 ring-white" ></Image>
                  <div>
                    <h3 className="font-semibold text-gray-900">Jane Reyes</h3>
                    <p className="md:text-sm text-xs text-gray-500">
                      COO • Northwind Traders
                    </p>
                  </div>
                </div>
                <div className="bg-blue-100 px-2 py-3 rounded-lg">
                  <div className="flex gap-2 items-center">
                    <Mail className="w-4 h-4" />
                    <h4 className="font-medium md:text-base text-xs text-gray-800 mb-1">
                      Engage with Jane Reyes
                    </h4>
                  </div>
                  <p className="md:text-sm text-xs text-gray-600">
                    Jane may be interested in upgrading espresso machines for her in-store coffee shops.
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Expand business • High buying intent
                </p>

              
                <div
                  className="absolute hidden group-hover:block  left-1/2 transform -translate-x-1/2 mb-2 w-max bg-black text-white text-xs rounded px-2 py-1 shadow-lg"
                >
                  High buying intent: Upgrade espresso machines
                </div>
              </div>
          </SwiperSlide>

            <SwiperSlide onClick={() => handleSlideClick("Jane Reyes")}>
              <div
                className="relative group h-[250px] border-b-2 border-l-2 border-r-2 shadow-sm rounded-md p-4 flex flex-col justify-between"
              >
                <div className="flex items-center gap-2">
                <Image src="/profile.PNG" alt={'profile-Image'} width={20} height={20} className="inline-block size-8 rounded-full ring-2 ring-white" ></Image>
                  <div>
                    <h3 className="font-semibold text-gray-900">Allan Munger</h3>
                    <p className="md:text-sm text-xs text-gray-500">
                      Head of Real Estate • Contoso Coffee
                    </p>
                  </div>
                </div>
                <div className="bg-blue-100 px-2 py-3 rounded-lg">
                  <div className="flex gap-2 items-center">
                    <CalendarDays className="w-4 h-4" />
                    <h4 className="font-medium md:text-base text-xs text-gray-800 mb-1">
                      Prepare for meeting with Allan
                    </h4>
                  </div>
                  <p className="md:text-sm text-xs text-gray-600">
                    Prepare for a high-buying intent meeting Copilot scheduled for 2 PM regarding upgrading the service contract.
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Upcoming meeting • Due today
                </p>

                
                <div
                  className="absolute hidden group-hover:block bottom left-1/2 transform -translate-x-1/2 mb-2 w-max bg-black text-white text-xs rounded px-2 py-1 shadow-lg"
                >
                  Meeting at 2 PM: Upgrade service contract
                </div>
              </div>
            </SwiperSlide>
                
            <SwiperSlide onClick={() => handleSlideClick("Jane Reyes")}>
              <div
                className="relative group h-[250px] border-b-2 border-l-2 border-r-2 shadow-sm rounded-md p-4 flex flex-col justify-between"
              >
                <div className="flex items-center gap-2">
                <Image src="/profile.PNG" alt={'profile-Image'} width={20} height={20} className="inline-block size-8 rounded-full ring-2 ring-white" ></Image>
                  <div>
                    <h3 className="font-semibold text-gray-900">Jane Reyes</h3>
                    <p className="md:text-sm text-xs text-gray-500">
                      COO • Northwind Traders
                    </p>
                  </div>
                </div>
                <div className="bg-blue-100 px-2 py-3 rounded-lg">
                  <div className="flex gap-2 items-center">
                    <Mail className="w-4 h-4" />
                    <h4 className="font-medium md:text-base text-xs text-gray-800 mb-1">
                      Engage with Jane Reyes
                    </h4>
                  </div>
                  <p className="md:text-sm text-xs text-gray-600">
                    Jane may be interested in upgrading espresso machines for her in-store coffee shops.
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Expand business • High buying intent
                </p>

              
                <div
                  className="absolute hidden group-hover:block  left-1/2 transform -translate-x-1/2 mb-2 w-max bg-black text-white text-xs rounded px-2 py-1 shadow-lg"
                >
                  High buying intent: Upgrade espresso machines
                </div>
              </div>
          </SwiperSlide>
              </Swiper>

                    </div>
                </div>    

                

                <div className='px-2 xl:w-[30%] w-full flex flex-col md:gap-4 gap-1'>
                  <h3 className='md:text-base text-sm'>Oher key activites</h3>

                  <div className=' flex flex-col md:gap-3 gap-1 border-b-2 shadow-b-md w-full md:h-[100px] rounded-b-md '>
                  <div className="flex items-center gap-2 px-3">
                      <div className='rounded-full px-2 py-2 bg-gray-300 mt-2 '>
                     <Image
                        src="/profile.PNG"
                        alt="Jane Reyes"
                        width={20}
    height={20}
 className="inline-block size-8 rounded-full ring-2 ring-white object-fill "
                      />
                     </div>
                      <div>
                        <h3 className="font-semibold md:text-base text-xs text-gray-900">
                          Cafe A100 for Woodland Bank
                        </h3>
                        <p className="text-xs text-gray-600">
                          Woodland Bank • $280,000 • 8 days to close
                        </p>
                      </div>
                    </div>

                    <div className='flex  justify-between gap-2 px-4'>
                    <div className='flex gap-2 items-center'>
                    <Mail  className='w-4 h-4 '/>
                    <p className='text-xs text-gray-600'>Review draft and reply to Chris Naido</p>
                    </div>
                    <Sparkles className='w-5 h-5 text-blue-900  flex items-start ' />
                    </div>
                  </div>

                  <div className=' flex flex-col gap-3 border-b-2 shadow-b-md w-full md:h-[100px] rounded-b-md '>
                  <div className="flex items-center gap-2 px-3">
                        <div className='rounded-full px-2 py-2 bg-gray-300 mt-2 '>
                     <Image
                        src="/profile.PNG"
                        alt="Jane Reyes"
                        width={20}
    height={20}
 className="inline-block size-8 rounded-full ring-2 ring-white object-fill "
                      />
                     </div>
                      <div>
                        <h3 className="font-semibold md:text-base text-xs text-gray-900">
                          Partnership opportunity for Fabrikam
                        </h3>
                        <p className="text-xs text-gray-600">
                        Fabrikam • $5,000,000 • 12 days to close
                        </p>
                      </div>
                    </div>

                    <div className='flex  justify-between gap-2 px-4'>
                    <div className='flex gap-2 items-center'>
                    <CalendarDays   className='w-4 h-4 '/>
                    <p className='text-xs text-gray-600'>Prepare me for Fabrikam&apos;s key stakeholder meeting </p>
                    </div>
                    <Sparkles className='w-7 h-10 text-blue-900  flex items-start ' />
                    </div>
                  </div>

                  <button className="text-blue-500 text-base font-medium cursor-pointer px-4 py-2 flex justify-start rounded-md hover:bg-blue-200 hover:text-blue-600 transition">
                     Show all key activities
                  </button>

                </div>
            </div>


        {isModalOpen && (
          <PanelModal selectedSlide={selectedSlide} closeModal={closeModal} />
        )}
      </div>
    </div>
  )
}

export default Panel
