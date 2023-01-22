import React, { useState } from "react";
import "./App.css";
import IPN from "./img/IPN-Logo.png";
import Carrito from "./img/Carrito.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { sortBy } from "lodash";
import Home from "./Screen/Home/Home";


function App(props) {

  let navigate=useNavigate();
  const correo=useFormInput("");
  const password=useFormInput("");
  let campos={
    email: correo.value,
    contraseña: password.value,
  };
  const requestOptions={
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  let dataJson;
  const handleLogin=async () => {
    await axios.post('http://127.0.0.1:8000/api/iniciarsesion', campos, requestOptions)
      .then((response) => {
        dataJson=response.data
        return dataJson;
      })
    if (dataJson==undefined) {
      console.log('vuelve a intentarlo')
      const alertPlaceholder=document.getElementById('liveAlertPlaceholder')

      const alert=(message, type) => {
        const wrapper=document.createElement('div')
        wrapper.innerHTML=[
          `<div class="alert alert-${type} alert-dismissible" role="alert">`,
          `   <div>${message}</div>`,
          '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
          '</div>'
        ].join('')

        alertPlaceholder.append(wrapper)
      }

      const alertTrigger=document.getElementById('liveAlertBtn')
      if (alertTrigger) {
        alertTrigger.addEventListener('click', () => {
          alert('Nice, you triggered this alert message!', 'success')
        })
      }
    } else {
      console.log('Bienvenido')
      navigate("/Home")
      //axios.post('http://127.0.0.1:8000/api/iniciarsesion', campos, requestOptions).then(console.log(campos))
      //  .then((response) => {
      //    dataJson=response.data;
      //  }).then(console.log(dataJson))
    }
    //console.log(dataJson);
  };

  const refreshTime=10000

  const [listaAP, setLista]=React.useState(null);
  const [listaPP, setListaPP]=React.useState(null);
  const [listaSP, setListaSP]=React.useState(null);

  const ListaP=() => {
    axios.get('http://127.0.0.1:8000/api/mostrar').then((response) => {
      setLista(response.data);
    });
    axios.get('http://127.0.0.1:8000/api/pocaE').then((response) => {
      setListaPP(response.data);
    });
    axios.get('http://127.0.0.1:8000/api/sinE').then((response) => {
      setListaSP(response.data);
    });
  }

  React.useEffect(() => {
    const comInterval=setInterval(ListaP, refreshTime)
    return () => clearInterval(comInterval)
  }, []);

  if (!listaAP) return null;
  if (!listaPP) return null;
  if (!listaSP) return null;

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
        <div id="liveAlertPlaceholder"></div>
        <br />
        <div>
          <button className="btn btn-info" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Mostrar productos</button>
        </div>
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">Mostrando todos los productos</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div className="Tittle">
                  <div className="Tittle-txt">Producto</div>
                  <div className="Tittle-txt">Precio</div>
                  <div className="Tittle-txt">Cantidad</div>
                </div>
                {sortBy(listaAP, ['precio'], ['asc']).map((producto) => (
                  <div className="App-row-e">
                    <div className="App-column">
                      <div className="App-txt">{producto.nombre}</div>
                    </div>
                    <div className="App-column">
                      <div className="App-txt">${producto.precio}</div>
                    </div>
                    <div className="App-column">
                      <div className="App-txt">{producto.cantidad}</div>
                    </div>
                  </div>
                ))}
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
