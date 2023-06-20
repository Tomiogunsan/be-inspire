import { AUTH_TOKEN } from '@/views/auth/constants'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  const authToken = localStorage.getItem(AUTH_TOKEN)
  return <div>{authToken ? <div
  className='absolute right-8 top-6 cursor-pointer'
  onClick={() => {
    localStorage.removeItem(AUTH_TOKEN)
    navigate('/login')
  }}
  >LogOut</div> : <div
  onClick={() => navigate('/login')}
  >Login</div>}</div>
}
