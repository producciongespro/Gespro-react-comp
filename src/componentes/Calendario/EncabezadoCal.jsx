import React, { useState } from "react";
import { filtrarId } from "../../_complementos/filtrar_array";
import meses from "./meses.json";

export default function EncabezadoCal(props) {
  const [mesActual, setMesActual] = useState(filtrarId(meses, props.hoy.mes));

  return (
    <div className="row">
      <div className="col-sm-2">◀️</div>
      <div className="col-sm-8 text-center">
        <h2> {mesActual.titulo} </h2>
      </div>
      <div className="col-sm-2 text-right">▶️</div>
    </div>
  );
}
