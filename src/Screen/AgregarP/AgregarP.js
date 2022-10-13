import React, { useState } from 'react';
import './AgregarP.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function AgregarP(props) {
    let navigate=useNavigate();

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

    const requestOptionsA={
        method: "POST",
        headers: {
            'Authorization': 'Bearer ',
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(camposAP),
    };

    const handleSubmitAP=async (event) => {
        event.preventDefault();
        fetch("http://127.0.0.1:8000/api/crear", requestOptionsA)
            .then((response) => response.json())
            .then((response) => console.log(response))
        navigate("/Home")
        setcb('');
        setnombre('');
        setcantidad('');
        setprecio('');
    };
    return (
        <body className="bodyAgr">
            <div className='header'>
                <div className='App-b'>Agregar producto</div>
                <button className="App">
                    <Link to={'/Home'}>
                        Regresar
                    </Link>
                </button>
            </div>
            <form className='cuerpo'>
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
                <button className='botonA' onClick={handleSubmitAP}>Agregar producto</button>
            </form>
        </body>
    );
}

export default AgregarP;