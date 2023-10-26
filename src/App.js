import React, { useState } from "react";
import "./App.css";
import { UseFetch } from "./components/UseFetch.jsx";
import CardPokemon from "./components/Cards/CardPokemon.jsx";
import { LoadingIcon } from "./components/LoadingIcon/Loadingicon.jsx";



function App() {
  // Creamos un estado para la url de la api
  const [url, setUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=9&offset=0`
  );
  // Obtenemos el estado de la api
  const estado = UseFetch(url);
  // Hacer destructuring del estado para obtener los valores
  const { cargando, data, nextPage, prevPage } = estado;
  return (
    <>
      {cargando ? (
        <div className="loader">
          <LoadingIcon />
        </div>
      ) : (
        <>
          <div className="App">
            <h1>Pokedex</h1>
            <div className="pokemons-container">
              {data.results.map((pokemon) => (
                <CardPokemon key={pokemon.name} url={pokemon.url} />
              ))}
            </div>
            <div className="button-container">
              <button
                className="btn-grad"
                onClick={() => (prevPage ? setUrl(prevPage) : null)}
              >
                Prev
              </button>
              <button className="btn-grad" onClick={() => setUrl(nextPage)}>
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
