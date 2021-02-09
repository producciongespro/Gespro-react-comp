import React, { useRef } from "react";
import Botones from "./Botones";
import ejBotones from "./ej_botones.json";

export default function ContBotones() {
  const refBotones = useRef();
  refBotones.current = [];

  const agregarRefBotones = (item) => {
    refBotones.current.push(item);
    console.log(refBotones.current);
  };

  // colores: azul, naranja, verde, crema
  const conf = {
    orienta: "linea",
    color: "crema",
  };

  const handleSeleccionarBtn = (i) => {
    const btn= refBotones.current[i];
    console.log(btn);
    btn.classList.add("btn-seleccionado");
    const item = ejBotones[i];
    console.log("Posición ", i, "Item:", item);
  };

  return (
    <Botones
      agregarRefBotones={agregarRefBotones}
      conf={conf}
      array={ejBotones}
      handleSeleccionarBtn={handleSeleccionarBtn}
    />
  );
}
