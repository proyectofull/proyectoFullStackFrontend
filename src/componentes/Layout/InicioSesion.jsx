import React from 'react'
import { Outlet } from 'react-router-dom'
import './inicioSesion.css'
const InicioSesion = () => {
  return (
      <div className='container-inicioSesion'>

    
    <Outlet />
      </div>
  )
}

export default InicioSesion