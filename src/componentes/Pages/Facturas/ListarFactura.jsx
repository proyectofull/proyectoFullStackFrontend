import React, { useState, useEffect } from "react";
import "./ListaFacturas.css";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Link } from "react-router-dom";

const ListarFactura = () => {
  const [facturas, setFacturas] = useState([]);

  useEffect(() => {
    const getFacturas = () => {
      fetch("http://localhost:7000/listar")
        .then((res) => res.json())
        .then((res) => setFacturas(res));
    };
    getFacturas();
  }, []);

  return (
    <>
      <h4>Lista Facturas:</h4>

      <table>
        <thead>
          <tr className="tr">
            <th className="th">N° Factura</th>
            <th>Fecha</th>
            <th>Cantidad</th>
            <th>Descripción</th>
            <th>Referencia</th>
            <th>Precio Unidad</th>
            <th>Iva</th>
            <th>Valor Neto</th>
            <th>Empleado</th>
            <th>Cedula</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {facturas.map( facturas => (
            <tr key={facturas.id}>
            <td>{facturas.id}</td>
            <td>{facturas.fecha}</td>
            <td>{facturas.cantidad}</td>
            <td>{facturas.descripcion}</td>
            <td>{facturas.referencia}</td>
            <td>{facturas.preciouni}</td>
            <td>{facturas.iva}</td>
            <td>{facturas.valorneto}</td>
            <td>{facturas.empleado}</td>
            <td>{facturas.cedula}</td>
            
             
            <td>
              <div className="divbtn">
              <Link to={''}>

                 <ModeEditIcon 
                    color="primary"
                    fontSize="large" 

                 />
              </Link>
                <DeleteSweepIcon 
                    //className="text-[#f50057]"
                    fontSize="large"
                    className="delete"
                 />
              </div>
            </td>
          </tr>
          ))}
          
        </tbody>
      </table>
    </>
  );
};

export default ListarFactura;
