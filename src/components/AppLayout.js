import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './layouts/navbar'

function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default AppLayout