import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter,Route,createRoutesFromElements } from 'react-router-dom'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Layout from './Layout.jsx'
import Register from './Pages/UserRegister.jsx'
import User from './Pages/User.jsx'
import Admin from './Pages/Admin.jsx'
import UserAccess from './Pages/UserAccess.jsx'
import AdminAccess from './Pages/AdminAccess.jsx'
import Login from './Pages/UserLogin.jsx'
import UserList from './Pages/UserList.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/users' element={<UserList/>}/>
      <Route path='/manager' element={<Admin/>}/>
      <Route path='/user-access' element={<UserAccess/>}/>
      <Route path='/admin-access' element={<AdminAccess/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="909388709760-d1ish9pemjatd9l8j6eo2enkse5jt1d0.apps.googleusercontent.com">
   <div>
    <RouterProvider router={router}/>
    </div>
    </GoogleOAuthProvider>;
  </React.StrictMode>,
)
