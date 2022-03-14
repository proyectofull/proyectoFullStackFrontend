import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./layout.css";
const Layout = () => {

  
  
  return (
    <div className="container-layout">
      <div className="container-div">
        <h2>NOMBRE Empresa :</h2>
         <nav className="nav">

            
           <Link to='/inicio/facturas' className="link">Facturación</Link>
           <Link to='/inicio/productos' className="link">Productos</Link>
           <Link to='/inicio/empleados' className="link">Empleados</Link>
           <Link to='/inicio/estadisticas' className="link">Estadisticas</Link>
         </nav>
      </div>
      <div className="outlet">

        <Outlet  />
      </div>
         
    </div>
  );
};

export default Layout;
