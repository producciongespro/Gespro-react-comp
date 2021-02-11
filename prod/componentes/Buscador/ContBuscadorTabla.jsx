import React, { useState } from "react";
import Buscador from "./Buscador";
import Tabla from "../Tabla/Tabla";
import array from "./ej_tabla.json";

const conf = {
  alterna: true,
  oscura: true,
  indice: false,
  encabezado: ["Nombre", "Nivel", "Responsable"],
  col1: "nombre",
  col2: "nivel",
  col3: "responsable",
};

const handleVerDetalles = (i) => {
  console.log("Posición del objeto", i);
  console.log("Item:", array[i]);
};

const handleEliminar = (e) => {
  const id = e.target.id;
  console.log("ID de Item a eliminar:", id);
};

export default function ContBusador() {
  const [filtrados, setFiltrados] = useState(array);

  const obtenerFiltrados = (f) => {
    setFiltrados(f);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <Buscador obtenerFiltrados={obtenerFiltrados} array={array} />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <Tabla
            handleVerDetalles={handleVerDetalles}
            handleEliminar={handleEliminar}
            conf={conf}
            array={filtrados}
          />
        </div>
      </div>
    </div>
  );
}
