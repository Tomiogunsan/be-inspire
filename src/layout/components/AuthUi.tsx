import React from 'react'
import {BsFillStarFill} from 'react-icons/bs'

export default function AuthUi() {
  return (
   
      <div className=' h-[80vh] bg-gradient-to-b from-[#5721b7] via-[#5d53f1] to-[#977bfa] text-[#eee4f8] flex flex-col items-center justify-center'>
        <h1 className='px-14 pb-8 font-semibold text-xl leading-7 text-center'>
          "For me, becoming isn’t about arriving somewhere or achieving a
          certain aim. I see it instead as forward motion, a means of evolving,
          a way to reach continuously toward a better self. The journey doesn't
          end."
        </h1>
        <p className='pb-4'>-Michelle Obama</p>
        <div className='flex text-[#fdc84b] gap-[4px] '>
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
        </div>
      </div>
     
  
  )
}
