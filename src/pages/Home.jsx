import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App.js";
import Pokemon from "../components/Pokemon/Pokemon.jsx";

export default function Home() {
  return (
    <>
      <BrowserRouter basename={"/pokeapi"}>
        <Routes>
          <Route path={`/`} element={<App />} />
          <Route path={`${process.env.PUBLIC_URL}/`} element={<App />} />
          <Route path={`${process.env.PUBLIC_URL}/pokemon/:name`} element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
