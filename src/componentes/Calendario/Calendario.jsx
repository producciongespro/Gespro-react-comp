import React, { useState, useEffect } from 'react';
import CeldaDias from "./CeldasDias";
import EncabezadoCal from "./EncabezadoCal";

const hoy = {
  dia: 10,
  mes: 2,
  anno: 2021,
};
// tamaño de fuente ---> T
// Dos tamaños s, m l (small, medium, large)

const conf= {
  t: "m"
}



export default function Calendario() {
  const [idMes, setIdMes]= useState(hoy.mes);

  useEffect(()=>{
    console.log("idMEs", idMes);
  });

  const obtenerMes=(id, mesActual )=> {
    setIdMes(id);
    console.log("mes actual desde calendario", mesActual);
  }

  return (
    <>
      <EncabezadoCal obtenerMes={obtenerMes} hoy={hoy} />
      <CeldaDias conf={conf} hoy={hoy} idMes={idMes} />
    </>
  );
}
