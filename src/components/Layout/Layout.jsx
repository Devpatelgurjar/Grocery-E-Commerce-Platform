import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'

const Layout = () => {
  return (
    <div className="flex w-full h-screen bg-gray-100/30">
    <Sidebar/>

    <div className="flex flex-col flex-1 overflow-y-auto">
    <Header/>
    <Outlet/>
  </div>
</div>
  )
}

export default Layout
