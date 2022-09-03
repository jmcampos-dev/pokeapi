import "../../App.css";
import React from "react";
import CardPokemon from "./CardPokemon.jsx";

export const Cards = ({ results }) => {
  return (
    <div className="container">
      <CardPokemon url={results.url} />
    </div>
  );
};

export default Cards;
