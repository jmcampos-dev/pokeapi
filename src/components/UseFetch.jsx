import { useState, useEffect } from "react";

export const UseFetch = (url) => {
  // Creamos un estado para almacenar los datos de la API
  const [resultado, setResultado] = useState({
    cargando: true,
    data: null,
    nextPage: null,
    prevPage: null,
    hp: null,
    attack: null,
    defense: null,
  });

  // Usamos useEffect para que se ejecute la función GetDatos() cuando se monte el componente y cuando cambie la url
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
      defense: null,
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
          defense: response,
        })
      );
  }

  return resultado;
};

export default UseFetch;
