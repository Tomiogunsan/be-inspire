import React, { useState } from 'react'
import AuthComponent from '@/views/auth/components/authReusable/AuthComponent'
import Button from '@/Sharedcomponents/button/Button'
import Input from '@/Sharedcomponents/input/input'
import { AiOutlineEye } from 'react-icons/ai'
// import {AiOutlineEyeInvisible} from 'react-icons/ai'

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>){
    setForm((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }))
  
  }
  return (
    <div>
      <AuthComponent
        title='Log In'
        smallText='Enter your email and password to login'
      />
      <Input
        type='email'
        name='email'
        placeholder='Password'
        label='Email'
        value={form.email}
        onChange={onInputChange}
      />
      <div className='relative'>
        <Input
          type='password'
          name='password'
          placeholder='Password'
          label='Password'
          value={form.password}
          onChange={onInputChange}
        />
        <AiOutlineEye className='absolute right-2 top-[45px] cursor-pointer text-[#eaebee] font-bold ' />
      </div>
      <Button
        type='button'
        variant='primary'
        className='w-full mt-2 rounded-sm'
      >
        Sign in
      </Button>
      <div className='flex gap-[4px] items-center pt-4'>
        <p className='text-[#bfc3c8] pt-[8px]'>Don't have an account?</p>
        <Button as='a' variant='link'>
          Sign Up
        </Button>
      </div>
      <Button as='a' variant='link'>
        Forgot Password?
      </Button>
    </div>
  )
}
