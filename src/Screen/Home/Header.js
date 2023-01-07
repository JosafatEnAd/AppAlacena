import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { dataJson } from "../../App";
import Modal from "react-modal";

function Header() {

    const [cb, setcb]=useState('');
    const [nombre, setnombre]=useState('');
    const [cantidad, setcantidad]=useState('');
    const [precio, setprecio]=useState('');

    let camposAP={
        cb: cb,
        nombre: nombre,
        cantidad: cantidad,
        precio: precio
    };

    const Crear={
        method: "POST",
        headers: {
            'Authorization': 'Bearer ',
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(camposAP),
    };

    function handleSubmitAP(e) {
        fetch("http://127.0.0.1:8000/api/crear", Crear)
            .then((response) => response.json())
            .then((response) => console.log(response))
        setcb('');
        setnombre('');
        setcantidad('');
        setprecio('');
    };

    let camposEP={
        cb: cb,
        nombre: nombre,
        cantidad: cantidad,
        precio: precio
    };

    const Editar={
        method: "POST",
        headers: {
            'Authorization': 'Bearer ',
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(camposAP),
    };

    function handleSubmitAP(e) {
        fetch("http://127.0.0.1:8000/api/editar", Editar)
            .then((response) => response.json())
            .then((response) => console.log(response))
        setcb('');
        setnombre('');
        setcantidad('');
        setprecio('');
    };
    const Close=async (event) => {
        setcb('');
        setnombre('');
        setcantidad('');
        setprecio('');
    };
    return (
        <body className="App-body">
            <div className="App-header">
                <div className="App-b">Bienvenid@</div>
                <button className="App" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Agregar producto</button>
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Agregar nuevo producto</h1>
                                <button type="button" onClick={() => { Close() }} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form className='cuerpo' autoComplete="off">
                                    <input className='campos' tabIndex="1" placeholder='Ingresa el código de barras'
                                        onChange={event => setcb(event.target.value)}
                                        value={cb}
                                    />
                                    <input className='campos' tabIndex="2" placeholder='Ingresa el nombre'
                                        onChange={event => setnombre(event.target.value)}
                                        value={nombre}
                                    />
                                    <input className='campos' tabIndex="3" placeholder='Ingresa la cantidad'
                                        onChange={event => setcantidad(event.target.value)}
                                        value={cantidad}
                                    />
                                    <input className='campos' tabIndex="4" placeholder='Ingresa el precio'
                                        onChange={event => setprecio(event.target.value)}
                                        value={precio}
                                    />
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button className='btn btn-success' tabIndex="5" onClick={() => { handleSubmitAP(); }} type="button" data-bs-dismiss="modal">Agregar producto</button>
                                <button className='btn btn-danger' type="button" data-bs-dismiss="modal" onClick={() => { Close() }}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="App" type="button" data-bs-toggle="modal" data-bs-target="#EditarProducto">Editar producto</button>
                <div class="modal fade" id="EditarProducto" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Editar producto</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form className='cuerpo' autoComplete="off">
                                    <input className='campos' tabIndex="6" placeholder='Ingresa el código de barras'
                                        onChange={event => setcb(event.target.value)}
                                        value={cb}
                                    />
                                    <input className='campos' tabIndex="7" placeholder='Ingresa el nombre'
                                        onChange={event => setnombre(event.target.value)}
                                        value={nombre}
                                    />
                                    <input className='campos' tabIndex="8" placeholder='Ingresa la cantidad'
                                        onChange={event => setcantidad(event.target.value)}
                                        value={cantidad}
                                    />
                                    <input className='campos' tabIndex="9" placeholder='Ingresa el precio'
                                        onChange={event => setprecio(event.target.value)}
                                        value={precio}
                                    />
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button className='btn btn-success' tabIndex="10" onClick={() => { handleSubmitAP(); }} type="button" data-bs-dismiss="modal">Editar producto</button>
                                <button className='btn btn-danger' type="button" data-bs-dismiss="modal">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to={"/"} className="App">
                    <button className="App" style={{ marginTop: '8px' }}>
                        Salir
                    </button>
                </Link>
            </div>
        </body>
    );
}
document.addEventListener('keypress', function (event) {

    // Si el evento NO es una tecla Enter
    if (event.key!=='Enter') {
        return;
    }

    let element=event.target;

    // Si el evento NO fue lanzado por un elemento con class "focusNext"
    if (!element.classList.contains('campos')) {
        return;
    }

    // AQUI logica para encontrar el siguiente
    let tabIndex=element.tabIndex+1;
    var next=document.querySelector('[tabindex="'+tabIndex+'"]');

    // Si encontramos un elemento
    if (next) {
        next.focus();
        event.preventDefault();
    }
});
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

export default Header;