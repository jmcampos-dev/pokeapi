import React from "react";
import { useParams } from "react-router-dom";
import UseFecth from "../UseFetch.jsx";
import ProgressBar from "@ramonak/react-progress-bar";

import "./Pokemon.css";

const MainDic = {
  fire: "Fuego",
  water: "Agua",
  steel: "Acero",
  bug: "Bicho",
  dragon: "Dragón",
  electric: "Electrico",
  ghost: "Fantasma",
  fairy: "Hada",
  ice: "Hielo",
  fighting: "Lucha",
  normal: "Normal",
  grass: "Planta",
  psychic: "Psíquico",
  rock: "Roca",
  dark: "Siniestro",
  ground: "Tierra",
  poison: "Veneno",
  flying: "Volador",
};

export default function Pokemon() {
  const params = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${params.name}`;
  const estado = UseFecth(url);
  const { data, hp, attack, defence } = estado;

  return (
    <>
      {data ? (
        <div className="pokemon-container">
          <div className="container">
            <div className="pokemon-img-container">
              <img
                src={data.sprites.other.home.front_default}
                alt={data.forms[0].name}
              />
              <div className="stats-container">
                <div className="stat-container">
                  <h5>HP</h5>
                  <ProgressBar
                    className="stats-progress"
                    completed={hp.stats[0].base_stat.toString()}
                    maxCompleted={255}
                    height="25"
                    bgColor="#BAE6FF"
                  />
                </div>
                <div className="stat-container">
                  <h5>ATK</h5>
                  <ProgressBar
                    className="stats-progress"
                    completed={attack.stats[1].base_stat.toString()}
                    maxCompleted={190}
                    height="25"
                    bgColor="#BAE6FF"
                  />
                </div>
                <div className="stat-container">
                  <h5>DEF</h5>
                  <ProgressBar
                    className="stats-progress"
                    completed={defence.stats[1].base_stat.toString()}
                    maxCompleted={250}
                    height="25"
                    bgColor="#BAE6FF"
                  />
                </div>
              </div>
            </div>
            <div className="pokemon-values-container">
              <div className="pokemon-altura">
                <h4>Altura</h4>
                <p>{data.height / 10} m</p>
              </div>
              <div className="pokemon-peso">
                <h4>Peso</h4>
                <p>{data.weight / 10} kg</p>
              </div>
              <div className="pokemon-tipo">
                <h4>Tipo</h4>
                {data.types.map((p) => {
                  let tipo = p.type.name;
                  let main = MainDic[tipo];
                  return (
                    <div key={p.slot}>
                      <p>{main}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="pokemon-container">
          <div className="loader">
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
