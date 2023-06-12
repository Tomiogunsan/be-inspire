import React from 'react'
import AuthComponent from '@/views/auth/components/authReusable/AuthComponent'
import Button from '@/Sharedcomponents/button/Button'

export default function Register() {
  return (
    <div>
      <AuthComponent
        title='Create an account'
        smallText='Sign up now to create and read inspirational quote'
        name='Name'
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
