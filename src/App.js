import React, { useState } from "react";
import "./App.css";
import IPN from "./img/IPN-Logo.png";
import Carrito from "./img/Carrito.png";
import { useNavigate } from "react-router-dom";
import { getToken, setUserSession } from "./Utils/Common";


function App(props) {

  let navigate=useNavigate();
  const correo=useFormInput("");
  const password=useFormInput("");
  let campos={
    email: correo.value,
    contraseña: password.value,
  };
  const requestOptions={
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(campos),
  };

  let dataJson={};
  const handleLogin=async () => {
    fetch("http://127.0.0.1:8000/api/iniciarsesion", requestOptions)
      .then((response) => response.json())
      .then(json => {
        dataJson=json
      })
      .then(() => console.log(dataJson))
    navigate("/Home")
    return dataJson;
  };



  return (
    <body className="body">
      <div className="header">
        <img src={IPN} className="logo" />
        <div className="text-header">Instituto Politécnico Nacional</div>
      </div>
      <div className="main">
        <img src={Carrito} className="carrito" />
        <div className="text-wel">!Bienvenid@s¡</div>
      </div>
      <div className="login-form">
        <form>
          <label>
            <input
              type="text"
              {...correo}
              autoComplete="new-password"
              className="input-login"
              placeholder="Ingresa tu correo"
            />
          </label>
          <input
            type="password"
            {...password}
            autoComplete="new-password"
            className="input-login"
            placeholder="Ingresa tu contraseña"
          />
        </form>
        <button type="button" className="input-login" onClick={handleLogin}>
          Iniciar sesión
        </button>
        <br />
        <div>
          <button className="boton-lista">Mostrar productos</button>
        </div>
      </div>
    </body>
  );
}

const useFormInput=(initialValue) => {
  const [value, setValue]=useState(initialValue);

  const handleChange=(e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export let dataJson;
export default App;
