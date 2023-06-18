import Button from '@/Sharedcomponents/button/Button'
import Input from '@/Sharedcomponents/input/input'
import React, { useState } from 'react'

export default function CreateQuote() {
  const [formState, setFormState] = useState({
    firstName: '',
    quote: '',
  })

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }))
 
  }
  return (
    <div className='flex flex-col  w-[50%] ml-[100px] mt-[100px]'>
      <h2>Create a quote</h2>
      <Input
      type='input'
        placeholder='Name'
        name='firstName'
        value={formState.firstName}
        onChange={onChange}
      />
      <textarea
        rows={4}
        cols={50}
        placeholder='Write a quote'
        name='quote'
        value={formState.quote}
        onChange={onChange}
        className='mb-6'
      />
      <Button type='submit' variant='primary' className='w-[100px] rounded-md'>
        Add
      </Button>
    </div>
  )
}
