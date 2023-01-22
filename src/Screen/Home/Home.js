import React, { useState, useEffect } from "react";
import "./Home.css";
import Header from "./Header";
import Operaciones from "./Operaciones";
import axios from "axios";
import { sortBy } from "lodash";

function Home(props) {
    const refreshTime=5000 //establece cada cuanto tiempo se refrescan los datos que se muestran esta en ms

    const [listaAP, setLista]=React.useState(null); //variables donde se guardan los datos que se van a listar
    const [listaPP, setListaPP]=React.useState(null);
    const [listaSP, setListaSP]=React.useState(null);

    const ListaP=async () => { //sirve para que al momento de que carga la página se solicitan los datos a la api de acuerdo a la lista en la que se ocupa
        axios.get('http://127.0.0.1:8000/api/mostrar').then((response) => {
            setLista(response.data); //se guardan los datos en setLista
        });
        axios.get('http://127.0.0.1:8000/api/pocaE').then((response) => {
            setListaPP(response.data);
        });
        axios.get('http://127.0.0.1:8000/api/sinE').then((response) => {
            setListaSP(response.data);
        });
    }

    React.useEffect(() => { //use effect es una herramienta de reactjs para poder realizar y detectar cambios en la página
        const comInterval=setInterval(ListaP, refreshTime) //listaP es la encargada de las 3 peticiones de metodos get, y refresh time es la variable que establece los 5000 ms de actualización de datos
        return () => clearInterval(comInterval)//reestablece el intervalo a 0 para que vuelva a empezar
    }, []);

    if (!listaAP) return null;//en caso no recibir datos no los muestra
    if (!listaPP) return null;
    if (!listaSP) return null;

    return (
        <body className="App-body">
            <Header />
            <Operaciones />
            <div>
                <p>Hola{props.data}</p>
            </div>
            <h1>Productos</h1>
            <div className="Tittle">
                <div className="Tittle-txt">Producto</div>
                <div className="Tittle-txt">Precio</div>
                <div className="Tittle-txt">Cantidad</div>
            </div>
            {listaAP.map(producto => ( //metodo .map concatena el array recibido para que se pueda renderizar en los componentes, key indica cual es el valor que tomara principal para listar los datos, y producto.nombre,cb,precio indican que valor es el que se mostrará
                <div className="App-row-e" key={producto.cb}>
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
            <h1>Poca existencia</h1>
            <div className="Tittle">
                <div className="Tittle-txt">Producto</div>
                <div className="Tittle-txt">Precio</div>
                <div className="Tittle-txt">Cantidad</div>
            </div>
            {sortBy(listaPP, ['precio'], ['asc']).map(producto => (
                <div className="App-row-e" key={producto.cb}>
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
            <h1>Productos agotados</h1>
            <div className="Tittle">
                <div className="Tittle-txt">Producto</div>
                <div className="Tittle-txt">Precio</div>
                <div className="Tittle-txt">Cantidad</div>
            </div>
            {sortBy(listaSP, ['precio'], ['asc']).map(producto => (
                <div className="App-row-e" key={producto.cb}>
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
        </body>
    );
}
//const listaAPP=productos.map((producto) => <li>{producto}</li>)


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

export default Home;
