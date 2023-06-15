import { Routes, Route } from 'react-router-dom'



import AuthLayout from '@/layout/AuthLayout'
import Login from '@/views/auth/Login'
import Register from '@/views/auth/Register'
import Home from '@/components/Home'
import ForgotPassword from '@/views/auth/ForgotPassword'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route element={<AuthLayout />}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Route>
    </Routes>
  )
}

export default App
