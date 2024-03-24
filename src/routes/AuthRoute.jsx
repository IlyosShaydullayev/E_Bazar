import Login from '@/pages/auth/Login'
import Register from '@/pages/auth/Register'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AuthRoute = () => {
  return (
    <Routes>
        <Route path='/sign-in' element={<Login />}/>
        <Route path='/sign-up' element={<Register />}/>
    </Routes>
  )
}

export default AuthRoute