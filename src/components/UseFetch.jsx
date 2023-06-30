import { useState, useEffect } from "react";

export const UseFecth = (url) => {
  const [resultado, setResultado] = useState({
    cargando: true,
    data: null,
    nextPage: null,
    prevPage: null,
    hp: null,
    attack: null,
    defence: null,
  });

  useEffect(() => {
    GetDatos(url);
  }, [url]);

  function GetDatos(url) {
    setResultado({
      cargando: true,
      data: null,
      nextPage: null,
      prevPage: null,
      hp: null,
      attack: null,
      defence: null,
    });

    fetch(url)
      .then((res) => res.json())
      .then((response) =>
        setResultado({
          cargando: false,
          data: response,
          nextPage: response.next,
          prevPage: response.previous,
          hp: response,
          attack: response,
          defence: response,
        })
      );
  }

  return resultado;
};

export default UseFecth;
