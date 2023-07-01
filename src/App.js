import React, { useState } from "react";
import "./App.css";
import { UseFecth } from "./components/UseFetch.jsx";
import Cards from "./components/Cards/Cards.jsx";



function App() {
  const [url, setUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=9&offset=0`
  );
  const estado = UseFecth(url);
  const { cargando, data, nextPage, prevPage } = estado;

  
  return (
    <>
      {cargando ? (
        <div className="loader">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <>
          <div className="App">
            <h1>Pokedex</h1>
            <div className="pokemons-container">
              {data.results.map((p) => (
                <Cards key={p.name} results={p} />
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
