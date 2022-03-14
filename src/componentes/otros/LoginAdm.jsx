import React from "react";
import "./LoginAdm.css";
import GroupsIcon from "@mui/icons-material/Groups";
import { Link } from "react-router-dom";

const LoginAdm = () => {
  return (
    <>
      <div className="container">
        <div className="icon">
          <GroupsIcon className="icon" sx={{ fontSize: 80 }} />
        </div>
        <h1 className="titulo">
          Inicio Sesión <span className="subtitulo">Administrador</span>
          <hr></hr>
        </h1>

        <form className="container-form">
          <label>
            Email
            <input type="text" name="email" placeholder="Email de registro" />
          </label>

          <label>
            Password
            <input type="text" placeholder="Email de registro" />
          </label>

          <input
            type="submit"
            onClick=""
            placeholder="Email de registro"
            className="registrar"
            value="Ingresar"
          />
        </form>
      </div>
    </>
  );
};

export default LoginAdm;
