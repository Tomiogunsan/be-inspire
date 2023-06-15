import React from 'react'
import Sidebar from '@/layout/components/Sidebar'
import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <div>
        <Sidebar />
        <Outlet />
    </div>
  )
}
