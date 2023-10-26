import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.jsx";

// Obtener el elemento root del DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
// Renderizar el componente Home dentro del elemento root
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
