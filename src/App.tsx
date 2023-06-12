import { Routes, Route } from 'react-router-dom'



import AuthLayout from '@/layout/AuthLayout'
import Login from '@/views/auth/Login'

function App() {
  return (
     <Routes>
      <Route element={<AuthLayout />}>
        <Route path='/login' element={<Login/>} />
      </Route>
    </Routes> 
  )
}

export default App
