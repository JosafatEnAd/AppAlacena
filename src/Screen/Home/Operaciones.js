import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Header from "./Header";
import { dataJson } from "../../App";
import Modal from "react-modal";

function Operaciones() {
    const [cbA, setcbA]=useState('');
    //se crea la constante donde se establece un valor inicial y el valor que se tomará al momento de ingresar el valor por el usuario
    const [cbQ, setcbQ]=useState('');
    const [cbE, setcbE]=useState('');
    //Se transforma el texto ingresado a un objeto
    let camposA={
        cb: cbA,
    };
    let camposQ={
        cb: cbQ,
    };
    let camposE={
        cb: cbE,
    };
    //se establecen los parametros para realizar una llamda a la API
    const requestOptionsA={
        method: "POST",
        headers: {
            'Authorization': 'Bearer '+dataJson,
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        //este metodo transforma el objeto de JavaScript a el formato de datos JSON
        body: JSON.stringify(camposA),
    };
    const requestOptionsQ={
        method: "POST",
        headers: {
            'Authorization': 'Bearer '+dataJson,
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(camposQ),
    };
    const requestOptionsE={
        method: "POST",
        headers: {
            'Authorization': 'Bearer '+dataJson,
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(camposE),
    };

    //Función donde se hace la llamada a la API
    const handleSubmitA=async (event) => {
        event.preventDefault();
        fetch("http://127.0.0.1:8000/api/agregar", requestOptionsA)
            .then((response) => response.json())
            .then((response) => console.log(response))
        //limpia el campo de texto
        setcbA('');
    };
    const handleSubmitQ=async (event) => {
        event.preventDefault();
        fetch("http://127.0.0.1:8000/api/quitar", requestOptionsQ)
            .then((response) => response.json())
            .then((response) => console.log(response))
        setcbQ('');
    };
    const handleSubmitE=async (event) => {
        event.preventDefault();
        fetch("http://127.0.0.1:8000/api/borrar", requestOptionsE)
            .then((response) => response.json())
            .then((response) => console.log(response))
        setcbE('');
    };
    //className es para mandar a llamar el estilo del input
    //onsubmit realiza la función al momento de hacer enter
    //onchange cambia el valor inicial que es nulo al valor que escribe el usuario
    //value establece a que valor correspone el campo que se esta escribiendo
    return (
        <div className="operaciones" >
            <form onSubmit={handleSubmitA} autoComplete="off">
                <input
                    className="input-operaciones"
                    onChange={event => setcbA(event.target.value)}
                    value={cbA}
                    id="Agregar"
                    placeholder="Agregar al inventario"
                ></input>
                <button type="submit" className="botonsubmit" >submit</button>
            </form>
            <form onSubmit={handleSubmitQ} autoComplete="off">
                <input
                    className="input-operaciones"
                    onChange={event => setcbQ(event.target.value)}
                    value={cbQ}
                    id="Quitar"
                    placeholder="Quitar del inventario"
                ></input>
                <button type="submit" className="botonsubmit" >submit</button>
            </form>
            <form onSubmit={handleSubmitE} autoComplete="off">
                <input
                    className="input-operaciones"
                    onChange={event => setcbE(event.target.value)}
                    value={cbE}
                    id="Eliminar"
                    placeholder="Eliminar del inventario"
                ></input>
                <button type="submit" className="botonsubmit" >submit</button>
            </form>
        </div>
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

export default Operaciones;