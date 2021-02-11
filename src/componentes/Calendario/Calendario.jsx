import React, { useState, useEffect } from 'react';
import CeldaDias from "./CeldasDias";
import EncabezadoCal from "./EncabezadoCal";
import fecha from '../../_complementos/fecha';

//Parámetros fijos;
let hoy = {
  dia: 24,
  mes: 7,
  anno: 2021,
};

//Parámetros dados por la fucnión fecha (obtiene la fecha actual del sistema)
hoy = fecha("objHoy");
console.log("hoy", hoy);


export default function Calendario(props) {
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
      <CeldaDias conf={props.conf} hoy={hoy} idMes={idMes} />
    </>
  );
}
