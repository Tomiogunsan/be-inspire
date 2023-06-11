import React from 'react'
import { AuthComponentProps } from '@/views/auth/components/authReusable/authComponent.type'
import Input from '@/Sharedcomponents/input/input'

export default function AuthComponent(props: AuthComponentProps) {
  const { title, paragraph, smallText } = props
  return (
    <div>
      {title && <h1 className='text-xl text-[#010101] font-bold'>{title}</h1>}
      {smallText && (
        <p className='text-[#bfc3c8] text-sm font-medium'>{smallText}</p>
      )}
      <Input type='email' placeholder='Password' label='Email' />
      <Input type='password' placeholder='Password' label='Password' />
      {paragraph && <p className='text-sm text-[#bfc3c8]'>{paragraph}</p>}
    </div>
  )
}
