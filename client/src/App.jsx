import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home/Home'
import MainLayout from './components/MainLayout'
import {createBrowserRouter,createRoutesFromElements,Route, RouterProvider} from 'react-router-dom'
import Login from './Pages/Home/Login/Login'
import Test from './Pages/Home/Test/Test'
import Dashboard from './Pages/Dashboard/Dashboard'

function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='test' element={<Test/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>

    </Route>
  ))
  return (
    <div className=' bg-first text-white'>
     <RouterProvider router={router}/>
    </div>
  )
}

export default App
