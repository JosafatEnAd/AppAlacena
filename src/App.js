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
          <input
            type="text"
            {...correo}
            autoComplete="new-password"
            className="input-login"
            placeholder="Ingresa tu correo"
          />
          <input
            type="password"
            {...password}
            autoComplete="new-password"
            className="input-login"
            placeholder="Ingresa tu contraseña"
          />
        </form>
        <button type="button" className="btn btn-success" style={{ width: '150px', marginLeft: '83vmin', marginTop: '40px' }} onClick={handleLogin}>
          Ingresar
        </button>
        <br />
        <div>
          <button className="btn btn-info" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Agregar producto</button>
        </div>
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">Mostrando todos los productos</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <h1>Productos</h1>
                <div className="Tittle">
                  <div className="Tittle-txt">Producto</div>
                  <div className="Tittle-txt">Precio</div>
                  <div className="Tittle-txt">Cantidad</div>
                </div>
                <div className="App-row-modal">
                  <div className="App-column">
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                    <div className="App-txt">Jamón</div>
                  </div>
                  <div className="App-column">
                    <div className="App-txt">$50</div>
                  </div>
                  <div className="App-column">
                    <div className="App-txt">20</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
