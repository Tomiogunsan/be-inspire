import React from 'react'
import { QuoteProps } from '@/views/dashboard/dashBoard.type'

export default function Quote(props: QuoteProps) {
  const { firstName, quote } = props
//   console.log(firstName)
  return (
    <div>
      <p>{firstName}</p>
      <p>{quote}</p>
    </div>
  )
}
