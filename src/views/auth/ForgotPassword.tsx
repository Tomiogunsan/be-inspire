import React from 'react'
import AuthComponent from '@/views/auth/components/authReusable/AuthComponent'
import Input from '@/Sharedcomponents/input/input'
import Button from '@/Sharedcomponents/button/Button'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
  return (
    <div>
      <AuthComponent
        title='Forgot Password?'
        smallText="No worries, we'll send you reset instructions."
      />
      <Input type='email' placeholder='Enter your email' name={''} value={''} />
      <Button
        type='submit'
        variant='primary'
        className='w-full mt-2 rounded-sm'
      >
        Reset Password
      </Button>
      <Link to='/login'>
        <Button
          as='a'
          variant='link'
          className='flex items-center justify-center'
        >
          <AiOutlineArrowLeft className='text-lg mr-[4px]' />
          Back to log in
        </Button>
      </Link>
    </div>
  )
}
