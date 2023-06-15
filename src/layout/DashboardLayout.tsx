import React from 'react'
import Sidebar from '@/layout/components/Sidebar'
import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <div className='bg-[#e6e8eb] w-full flex'>
      
        <Sidebar />
        <div className='w-[80%]'>
          <Outlet />
        </div>
     
    </div>
  )
}
