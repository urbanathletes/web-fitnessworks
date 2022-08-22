import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarInves from './layouts/navbarInves'

function AppLayoutInves() {
  return (
    <>
      <NavbarInves />
      <Outlet />
    </>
  )
}

export default AppLayoutInves