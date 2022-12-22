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

    const Existencias={
        method: "POST",
        headers: {
            'Authorization': 'Bearer ',
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(camposAP),
    };

    const handleSubmitAP=async (event) => {
        fetch("http://127.0.0.1:8000/api/crear", Existencias)
            .then((response) => response.json())
            .then((response) => console.log(response))
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
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form className='cuerpo' autoComplete="off">
                                    <input className='campos' placeholder='Ingresa el código de barras'
                                        onChange={event => setcb(event.target.value)}
                                        value={cb}
                                    />
                                    <input className='campos' placeholder='Ingresa el nombre'
                                        onChange={event => setnombre(event.target.value)}
                                        value={nombre}
                                    />
                                    <input className='campos' placeholder='Ingresa la cantidad'
                                        onChange={event => setcantidad(event.target.value)}
                                        value={cantidad}
                                    />
                                    <input className='campos' placeholder='Ingresa el precio'
                                        onChange={event => setprecio(event.target.value)}
                                        value={precio}
                                    />
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button className='btn btn-success' onClick={() => { handleSubmitAP(); }} type="button" data-bs-dismiss="modal">Agregar producto</button>
                                <button className='btn btn-danger' type="button" data-bs-dismiss="modal">Cancelar</button>
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
                                    <input className='campos' placeholder='Ingresa el código de barras'
                                        onChange={event => setcb(event.target.value)}
                                        value={cb}
                                    />
                                    <input className='campos' placeholder='Ingresa el nombre'
                                        onChange={event => setnombre(event.target.value)}
                                        value={nombre}
                                    />
                                    <input className='campos' placeholder='Ingresa la cantidad'
                                        onChange={event => setcantidad(event.target.value)}
                                        value={cantidad}
                                    />
                                    <input className='campos' placeholder='Ingresa el precio'
                                        onChange={event => setprecio(event.target.value)}
                                        value={precio}
                                    />
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button className='btn btn-success' onClick={() => { handleSubmitAP(); }} type="button" data-bs-dismiss="modal">Editar producto</button>
                                <button className='btn btn-danger' type="button" data-bs-dismiss="modal">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to={"/"} className="App">
                    <button className="App">
                        Salir
                    </button>
                </Link>
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

export default Header;