import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App.js";
import Pokemon from "../components/Pokemon/Pokemon.jsx";

export default function Home() {
  return (
    <>
      <BrowserRouter basename="/pokeapi">
        <Routes>
          <Route path="/pokeapi" element={<App />} />
          <Route path="/pokemon/:name" element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
