import React from 'react';
import { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function App() {
  const [show, setShow]=useState(false);
  const handleClose=() => setShow(false);
  const handleShow=() => setShow(true);

  return (
    <body className='App-body'>
      <div className="App-header">
        <div className="App-b">Bienvenid@</div>
        <div className="App">Editar producto</div>
        <div className="App">Eliminar producto</div>
      </div>
      <div>Agrega un producto
        <input placeholder='Lee el código'></input>
      </div>
      <div className="App-row-e">
        <div className="App-column">
          <div className="App-txt">Producto</div>
          <div className="App-txt">Jamón</div>
          <div className="App-txt">Jamón</div>
          <div className="App-txt">Jamón</div>
          <div className="App-txt">Jamón</div>
          <div className="App-txt">Jamón</div>
          <div className="App-txt">Jamón</div>
          <div className="App-txt">Jamón</div>
        </div>
        <div className="App-column">
          <div className="App-txt">Precio</div>
          <div className="App-txt">$50</div>
          <div className="App-txt">$50</div>
          <div className="App-txt">$50</div>
          <div className="App-txt">$50</div>
          <div className="App-txt">$50</div>
          <div className="App-txt">$50</div>
        </div>
        <div className="App-column">
          <div className="App-txt">Cantidad</div>
          <div className="App-txt">20</div>
          <div className="App-txt">20</div>
          <div className="App-txt">20</div>
          <div className="App-txt">20</div>
          <div className="App-txt">20</div>
          <div className="App-txt">20</div>
          <div className="App-txt">20</div>
        </div>
      </div>
      <button className="App-button">Poca existencia</button>
      <div className="App-row-pe">
        <div className="App-column">
          <div className="App-txt">Producto</div>
          <div className="App-txt">Jamón</div>
        </div>
        <div className="App-column">
          <div className="App-txt">Precio</div>
          <div className="App-txt">$50</div>
        </div>
        <div className="App-column">
          <div className="App-txt">Cantidad</div>
          <div className="App-txt">20</div>
        </div>
      </div>
      <button className="App-button">Sin existencia</button>
      <div className="App-row-se">
        <div className="App-column">
          <div className="App-txt">Producto</div>
          <div className="App-txt">Jamón</div>
        </div>
        <div className="App-column">
          <div className="App-txt">Precio</div>
          <div className="App-txt">$50</div>
        </div>
        <div className="App-column">
          <div className="App-txt">Cantidad</div>
          <div className="App-txt">20</div>
        </div>
      </div>
    </body>
  );
}

export default App;
