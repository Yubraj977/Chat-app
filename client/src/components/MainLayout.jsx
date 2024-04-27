import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
function MainLayout() {
  return (
    <div>
        
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout