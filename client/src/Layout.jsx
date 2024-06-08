import React from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import { Outlet } from 'react-router-dom'
import Marque from './common/Marque'

function Layout() {
  return (
    <div>
       <Header/>
       <Marque/>
       <Outlet/>
       <Footer/>

    </div>
  )
}

export default Layout