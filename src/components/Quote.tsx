import React from 'react'
import { QuoteProps } from '@/views/dashboard/dashBoard.type'

export default function Quote(props: QuoteProps) {
  const { firstName, quote } = props
//   console.log(firstName)
  return (
    
      <div className='bg-red-600 rounded-md text-white flex flex-col items-center justify-center'>
        <p>{firstName}</p>
        <p>{quote}</p>
      </div>
   
  )
}
