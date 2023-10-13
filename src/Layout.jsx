import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'

const Layout = () => {
  return (
    <div className='w-full min-h-screen font-poppins'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Layout