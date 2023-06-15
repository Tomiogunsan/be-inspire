import { Routes, Route } from 'react-router-dom'

import AuthLayout from '@/layout/AuthLayout'
import Login from '@/views/auth/Login'
import Register from '@/views/auth/Register'

import ForgotPassword from '@/views/auth/ForgotPassword'
import Dashboard from './views/dashboard/Dashboard'
import DashboardLayout from './layout/DashboardLayout'
import Home from '@/views/dashboard/Home'
import CreateQuote from '@/views/dashboard/CreateQuote'

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path='/' element={<Dashboard />} >
        <Route index element={<Home />} />
        <Route path='/create-quote' element={<CreateQuote />} />
        </Route>
      </Route>

      <Route element={<AuthLayout />}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Route>
    </Routes>
  )
}

export default App
