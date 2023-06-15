import React from 'react'
import {AiFillHome, AiOutlineHome} from 'react-icons/ai'
import { BsPencilSquare } from 'react-icons/bs'

export default function Sidebar() {
  return (
    <div className='flex bg-[#fff] w-[20%] h-screen border-r-[3px]'>
      <div className='flex flex-col p-4 mt-16'>
        <div className='flex items-center gap-2 text-lg mb-6 text-[#535a65]'>
          <AiFillHome className='text-[#000001] text-xl' />
          Home
        </div>
        <div className='flex items-center justify-center gap-2 text-lg text-[#535a65]'>
          <BsPencilSquare className=' text-xl text-[#000001]' />
          Write a Quote
        </div>
      </div>
    </div>
  )
}
