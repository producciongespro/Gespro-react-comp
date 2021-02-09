//import React, { useState } from 'react';
import { buscar } from "../../_complementos/buscador";

export default function Buscador(props) {
  const handleBuscar = (e) => {
    let palabra= e.target.value;
     let filtrados=  buscar(palabra, props.array );
     console.log("filtrados", filtrados);
  };

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="lupa-addon">
          🔍
        </span>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Digite la palabra a buscar"
        aria-label="text"
        aria-describedby="lupa-addon"
        onChange={handleBuscar}
      />
    </div>
  );
}
