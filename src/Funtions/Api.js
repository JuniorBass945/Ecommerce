// import React from "react";
import { useState, useEffect } from "react";

export function TraerDatos(url) {
  const [Datos, setDatos] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDatos(data));
  }, []);

  return Datos;
}

