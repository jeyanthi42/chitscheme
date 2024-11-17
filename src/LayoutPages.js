import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import NavigationBarforChit from './NavigationBarforChit'

const LayoutPages = () => {
  return (
    <div> 
      <Header></Header>
      <NavigationBarforChit></NavigationBarforChit>
      <main>
      
      <Outlet />
      </main>
      
    </div>
  )
}

export default LayoutPages
