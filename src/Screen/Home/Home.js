import React, { useState, useEffect } from "react";
import "./Home.css";
import Header from "./Header";
import Operaciones from "./Operaciones";
import { dataJson } from "../../App";

function Home(props) {
    return (
        <body className="App-body">
            <Header />
            <Operaciones />
            <div>{dataJson}</div>
            <h1>Productos</h1>
            <div className="Tittle">
                <div className="Tittle-txt">Producto</div>
                <div className="Tittle-txt">Precio</div>
                <div className="Tittle-txt">Cantidad</div>
            </div>
            <div className="App-row-e">
                <div className="App-column">
                    <div className="App-txt">Jamón</div>
                </div>
                <div className="App-column">
                    <div className="App-txt">$50</div>
                </div>
                <div className="App-column">
                    <div className="App-txt">20</div>
                </div>
            </div>
            <h1>Poca existencia</h1>
            <div className="Tittle">
                <div className="Tittle-txt">Producto</div>
                <div className="Tittle-txt">Precio</div>
                <div className="Tittle-txt">Cantidad</div>
            </div>
            <div className="App-row-e">
                <div className="App-column">
                    <div className="App-txt">Jamón</div>
                </div>
                <div className="App-column">
                    <div className="App-txt">$50</div>
                </div>
                <div className="App-column">
                    <div className="App-txt">20</div>
                </div>
            </div>
            <h1>Productos agotados</h1>
            <div className="Tittle">
                <div className="Tittle-txt">Producto</div>
                <div className="Tittle-txt">Precio</div>
                <div className="Tittle-txt">Cantidad</div>
            </div>
            <div className="App-row-e">
                <div className="App-column">
                    <div className="App-txt">Jamón</div>
                </div>
                <div className="App-column">
                    <div className="App-txt">$50</div>
                </div>
                <div className="App-column">
                    <div className="App-txt">20</div>
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

export default Home;
