import React from 'react'
import { AuthComponentProps } from '@/views/auth/components/authReusable/authComponent.type'


export default function AuthComponent(props: AuthComponentProps) {
  const { title, smallText} = props
  return (
    <div>
      {title && (
        <h1 className='text-xl text-[#010101] font-bold pb-6'>{title}</h1>
      )}
      {smallText && (
        <p className='text-[#bfc3c8] text-sm font-medium pb-8'>{smallText}</p>
      )}
      
     
    </div>
  )
}
