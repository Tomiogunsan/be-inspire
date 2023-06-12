import React from 'react'
import { InputProps } from '@/Sharedcomponents/input/input.type'

export default function Input(props: InputProps) {
  const { label, placeholder, type, name, value, onChange } = props
  return (
    <div className='flex flex-col'>
      <label className=' text-base pb-2 text-[#898889]  font-medium'>{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        className='w-[350px] border outline-[#6d67ff] px-2 py-[10px] mb-2 rounded-md shadow-sm'
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
