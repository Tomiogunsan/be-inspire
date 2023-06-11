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
      <Button type='button' variant='primary'>
        Sign in
      </Button>
    </div>
  )
}
