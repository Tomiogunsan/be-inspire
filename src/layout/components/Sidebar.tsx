import React from 'react'
import {AiFillHome, AiOutlineHome} from 'react-icons/ai'
import { BsPencilSquare } from 'react-icons/bs'

export default function Sidebar() {
  return (
    <div className='flex bg-[#fff] w-[20%] h-screen '>
      <div className='flex flex-col p-4 mt-28  cursor-pointer '>
        <div className='flex items-center gap-4 text-lg mb-6 text-[#535a65] ml-6 hover:bg-[#5d53f1] hover:text-[#f4f4f4] hover:px-4 hover:py-4 hover:rounded-md hover:transition  ease-linear'>
          <AiFillHome className='text-[#000001] text-xl hover:text-[#f4f4f4]' />
          Home
        </div>
        <div className=' ml-6 flex items-center justify-center gap-4 text-lg text-[#535a65] hover:bg-[#5d53f1] hover:text-[#f4f4f4] hover:px-4 hover:py-4 hover:rounded-md hover:transition  ease-linear'>
          <BsPencilSquare className=' text-xl text-[#000001] hover:text-[#f4f4f4]' />
          Create Quote
        </div>
      </div>
    </div>
  )
}
