import React from 'react'
import AuthComponent from '@/views/auth/components/authReusable/AuthComponent'
import Button from '@/Sharedcomponents/button/Button'

export default function Register() {
  return (
    <div>
        <AuthComponent title='Create an account' smallText='Sign up now to create and read inspirational quote' name='Name' />
        <Button type='button' variant='primary'>Create Account</Button>
    </div>
  )
}
