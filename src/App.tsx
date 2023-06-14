import { Routes, Route } from 'react-router-dom'



import AuthLayout from '@/layout/AuthLayout'
import Login from '@/views/auth/Login'
import Register from '@/views/auth/Register'
import Home from './components/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route element={<AuthLayout />}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App
