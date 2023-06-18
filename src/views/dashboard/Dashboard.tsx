import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className='w-[80%] '>
      <Outlet />
    </div>
  )
}
