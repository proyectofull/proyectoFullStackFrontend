import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import InicioSesion from './componentes/Layout/InicioSesion';
import Layout from './componentes/Layout/Layout';
import LoginAdm from './componentes/otros/LoginAdm';
 

import Inicio from './componentes/Inicio/Inicio';
import ListaProducto from './componentes/Pages/Producto/ListaProducto';
import Facturacion from './componentes/Pages/Facturas/Facturacion';
import IndexProductos from './componentes/Pages/Producto/IndexProductos';
import IndexEmpleados from './componentes/Empleados/IndexEmpleados';
import IndexExtadisticas from './componentes/estadisticas/IndexExtadisticas';

function App() {
  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<InicioSesion />}>
                  <Route index element={<LoginAdm />}   
                  />
                   
            </Route>
            
            <Route path="/inicio" element={<Layout />}>
                  <Route index element={<Inicio />} /> 
                  <Route path='facturas' element={<Facturacion />} /> 
                  <Route path='productos' element={<IndexProductos />} /> 
                  <Route path='empleados' element={<IndexEmpleados />} /> 
                  <Route path='estadisticas' element={<IndexExtadisticas />} /> 
            </Route>
        </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
