import React from 'react';
import './AgregarP.css';
import { Link } from 'react-router-dom';

function AgregarP() {
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
            <div className='cuerpo'>
                <input className='campos' placeholder='Ingresa el código de barras' />
                <input className='campos' placeholder='Ingresa el nombre' />
                <input className='campos' placeholder='Ingresa la cantidad' />
                <input className='campos' placeholder='Ingresa el precio' />
                <button className='botonA'>Agregar producto</button>
            </div>
        </body>
    );
}

export default AgregarP;