import React ,{ useState } from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import { Outlet } from 'react-router-dom'
import Marque from './common/Marque'


function Layout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
       <Header isLoggedIn={isLoggedIn} />
       <Marque/>
       <Outlet context={{ isLoggedIn, setIsLoggedIn }}/>
       <Footer/>

    </div>
  )
}

export default Layout