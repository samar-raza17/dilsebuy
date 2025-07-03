import React from 'react'
import Navbar from '../Navbar/Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen">
        {children}
      </div>
    </>
  )
}

export default Layout
