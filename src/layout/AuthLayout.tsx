import React from 'react'
import AuthUi from '@/layout/components/AuthUi'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className='w-full p-28  h-[100vh] bg-[#e6e8eb] grid grid-cols-2 rounded-md'>
      <AuthUi />
      <div className='bg-[#ffffff]  flex flex-col items-center justify-center'>
        <Outlet />
      </div>
    </div>
  )
}
