import React, { useState } from 'react'
import AuthComponent from '@/views/auth/components/authReusable/AuthComponent'
import Button from '@/Sharedcomponents/button/Button'
import Input from '@/Sharedcomponents/input/input'


export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  })

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }))
  }
  return (
    <div>
      <AuthComponent
        title='Create an account'
        smallText='Sign up now to create and read inspirational quote'
      />
      <Input
        type='input'
        placeholder='Name'
        label='Name'
        value={form.name}
        name='name'
        onChange={onInputChange}
      />
      <Input
        type='email'
        placeholder='Email'
        label='Email'
        value={form.email}
        name='email'
        onChange={onInputChange}
      />
      <Input
        type='password'
        placeholder='Password'
        label='Password'
        value={form.password}
        name='password'
        onChange={onInputChange}
      />
      <Button
        type='button'
        variant='primary'
        className='w-full mt-4 rounded-sm'
      >
        Create Account
      </Button>
      <div className='flex gap-[4px] items-center pt-4'>
        <p className='text-[#bfc3c8] pt-[8px]'>Already have an account?</p>
        <Button as='a' variant='link'>
          Sign In
        </Button>
      </div>
    </div>
  )
}
