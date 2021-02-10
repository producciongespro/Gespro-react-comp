import Tabla from "./Tabla";
import ejTabla from "./ej_tabla.json";

export default function ContTabla() {
  //Títulos de tabla
  const encabezado = ["Nombre", "Nivel", "Responsable"];
  
  const conf = {
    alterna: false,
    oscura: false,
    indice: true,
    col1: "nombre",
    col2: "nivel",
    col3: "responsable"
  };

  const handleVerDetalles = (i) => {
    console.log("Posición del objeto", i);
    console.log("Item:", ejTabla[i]);
  };

  const handleEliminar = (e) => {
    const id = e.target.id;
    console.log("ID de Item a eliminar:", id);
  };

  return (
    <Tabla
      handleVerDetalles={handleVerDetalles}
      handleEliminar={handleEliminar}
      conf={conf}
      encabezado={encabezado}
      array={ejTabla}
    />
  );
}
