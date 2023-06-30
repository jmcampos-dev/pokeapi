import "../../App.css";
import { useNavigate } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import UseFecth from "../UseFetch.jsx";

export const CardPokemon = ({ url }) => {
  const navigate = useNavigate();
  const estado = UseFecth(url);
  const { cargando, data, hp, attack, defence } = estado;

  return (
    <>
      {cargando ? (
        <div className="loader-cards">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="card flip-box-front">
              <div className="card-header">
                <img
                  src={data.sprites.front_default}
                  alt={data.forms[0].name}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  #{data.id.toString().padStart(3, 0)}
                </h5>
              </div>
              <div className="card-footer">
                <p className="card-text ">{data.forms[0].name}</p>
              </div>
            </div>
            <div className="flip-box-back">
              <h3 className="stats-title">Base Stats</h3>
              <div className="stats-container">
                <div className="stat-container">
                  <h5>HP</h5>
                  <ProgressBar
                    className="stats-progress"
                    completed={hp.stats[0].base_stat.toString()}
                    maxCompleted={255}
                    height="25"
                    bgColor="#BAE6FF"
                    labelColor="#000"
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
                    labelColor="#000"
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
                    labelColor="#000"
                  />
                </div>
              </div>
              <div className="button-container-pokemon">
                <button
                  className="btn-grad"
                  onClick={() => navigate(`/pokemon/${data.forms[0].name}`)}
                >
                  Saber Mas
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardPokemon;
