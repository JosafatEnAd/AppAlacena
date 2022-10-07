import React from 'react';
import './EditarP.css';
import { Link } from 'react-router-dom';

function EditarP() {
    return (
        <body className="bodyAgr">
            <div className='header'>
                <div className='App-b'>Editar producto</div>
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
                <button className='botonA'>Editar producto</button>
            </div>
        </body>
    );
}

export default EditarP;