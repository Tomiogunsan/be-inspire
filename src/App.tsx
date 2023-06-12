import { Routes, Route } from 'react-router-dom'

import AuthComponent from '@/views/auth/components/authReusable/AuthComponent'

function App() {
  return (
    // <Routes>
    //   <Route>
        <div>
          <AuthComponent title='Sign Up' smallText='Enter your email' name='name'/>
        </div>
    //   {/* </Route>
    // </Routes> */}
  )
}

export default App
