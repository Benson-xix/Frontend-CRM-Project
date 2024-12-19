import { CircleHelp, Grip, Lightbulb, MessagesSquare, Plus, Settings } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


const Header = () => {
  return (
    <div className='w-full bg-[#00102A] h-[10%] sm:flex hidden  justify-between '>
        <div className='w-1/3 gap-4 flex items-center  justify-start pl-2 py-2'>
        <Grip className='text-gray-400' />
        <p className='md:text-sm text-xs text-gray-400'>Dynamic 365</p>
        <div className='w-[.5px] h-full bg-gray-400'></div>
        <p className='md:text-[12px] text-xs text-gray-400'>Sales hub</p>
        </div>

        <div className='w-1/3 flex justify-end items-center gap-3 pr-2 py-2'>
        <Lightbulb className='text-gray-400 h-[18px]' />
        <Plus className='text-gray-400 h-[18px]'/>
        <Settings  className='text-gray-400 h-[18px]'/>
        <CircleHelp className='text-gray-400 h-[18px]' />
        <MessagesSquare className='text-gray-400 h-[18px]' />
      <div>
       <Image src="/profile.PNG" alt={'profile-Image'} width={20} height={20} className="inline-block size-8 rounded-full ring-2 ring-white" ></Image>
      </div>
        </div>
    </div>
  )
}

export default Header
