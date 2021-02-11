import React, { useState, useEffect } from "react";
import { filtrarId } from "../../_complementos/filtrar_array";
import meses from "./meses.json";

let idMesActual;

export default function EncabezadoCal(props) {
  const [mesActual, setMesActual] = useState(filtrarId(meses, props.hoy.mes));
  const limiteMeses = meses.length;
  console.log("limiteMeses", limiteMeses);

  console.log("idMesActual des funcion------>",idMesActual);

  useEffect(()=>{
    idMesActual = props.hoy.mes;
  },[])

  const handlePasarMeses = (e) => {
    const id = e.target.id;
    id === "btnAtras" && idMesActual > 1 && idMesActual--;
    id === "btnAdelante" && idMesActual < limiteMeses && idMesActual++;
    console.log("idMesActual pasar////",idMesActual);    
    setMesActual(filtrarId(meses, idMesActual));
  };

  return (
    <div className="row">
      <div
        onClick={handlePasarMeses}
        id="btnAtras"
        role="button"
        className="col-sm-2 text-left emoji-l"
      >
        ◀️
      </div>
      <div className="col-sm-8 text-center">
        <h2> {mesActual.titulo} </h2>
      </div>
      <div
        onClick={handlePasarMeses}
        id="btnAdelante"
        role="button"
        className="col-sm-2 text-right emoji-l"
      >
        ▶️
      </div>
    </div>
  );
}
