import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "../src/App";
import Home from "../src/Screen/Home/Home";
import AgregarP from "../src/Screen/AgregarP/AgregarP";
import EditarP from "./Screen/EditarP/EditarP";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Home" element={<Home />} />
      <Route path="Agregar" element={<AgregarP />} />
      <Route path="Editar" element={<EditarP />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);