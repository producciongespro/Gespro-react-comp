import React, { useState } from "react";
import Tarjetas from '../Tarjetas/Tarjetas';
import {filtrarId} from '../../_complementos/filtrar_array';
import Buscador from "./Buscador";
import array from "./ej_tabla.json";

export default function ContBusador() {
  const [filtrados, setFiltrados] = useState(array);
  
  const obtenerFiltrados = (f) => {
    setFiltrados(f);
  };


   const handleObtenerDetalleTarjeta=(e)=> {
    const id= e.target.id;
    console.log(id);
    let item= filtrarId(array, id);
    console.log(item);
}


const conf= {
    "img": false, //Si contienes imagenes  img=true
    "col": "sm-4", //Columna boostrap
    "hx": 5, //tamaño del títitulo (1 - 6) Ej si es (h1) hx= 1
    "titulo": "nombre", // nombre del campo con la iformación que se depliega en el título de la tarjeta
    "descripcion": "tags" //nombre del campo de la descripción
}

  return (
<div className="container">
<div className="row">
      <div className="col-sm-12">
        <Buscador obtenerFiltrados={obtenerFiltrados} array={array} />
      </div>
    </div>

    <div className="row">
      <div className="col-12">
        {
          filtrados &&
          <Tarjetas handleObtenerDetalleTarjeta={handleObtenerDetalleTarjeta}  conf={conf} array={filtrados} />
        }
      </div>
    </div>
</div>
  );
}
