import React from 'react'
import Boton from '../../otros/Boton'
import ListarFacturacion from './ListarFactura'
import './Facturacion.css'


const Facturacion = () => {


  
  return (
    <>
    <h1>Información de facturación</h1>
         <div className='info-factura'>
             <p >Página centrar de toda la informacion</p>
             <Boton texto = "Nueva Factura " />
         </div>
    <hr></hr>
    <ListarFacturacion />

     
    </>
  )
}

export default Facturacion