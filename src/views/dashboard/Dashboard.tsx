import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className='w-[80%] flex bg-red-600'>
      <Outlet />
    </div>
  )
}
