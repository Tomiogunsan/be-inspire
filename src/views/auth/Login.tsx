import React from 'react'
import AuthComponent from '@/views/auth/components/authReusable/AuthComponent'
import Button from '@/Sharedcomponents/button/Button'


export default function Login() {
  return (
    <div>
      <AuthComponent
        title='Log In'
        smallText='Enter your email and password to login'
      />
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
