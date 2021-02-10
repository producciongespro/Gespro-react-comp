import React, { useState } from "react";
import Buscador from "./Buscador";
import Tabla from "../Tabla/Tabla";
import array from "./ej_tabla.json";

export default function ContBusador() {
  const [filtrados, setFiltrados] = useState(array);

  const obtenerFiltrados = (f) => {
    setFiltrados(f);
  };

  const encabezado = ["#", "Nombre", "Nivel", "Responsable"];
  const conf = {
    alterna: false,
    oscura: false,
  };

  const handleVerDetalles = (i) => {
    console.log("Posición del objeto", i);
    console.log("Item:", array[i]);
  };

  const handleEliminar = (e) => {
    const id = e.target.id;
    console.log("ID de Item a eliminar:", id);
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
            encabezado={encabezado}
            array={filtrados}
          />
        </div>
      </div>
    </div>
  );
}
