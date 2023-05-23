import React from 'react'
import '../../index.scss';
import { Navbar } from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}
