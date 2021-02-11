import Tabla from "./Tabla";
import array from "./ej_tabla.json";


const conf = {
  alterna: false,
  oscura: false,
  indice: true,
  encabezado: ["Nombre", "Nivel", "Responsable"], //Títulos de tabla (Primera fila encabezado)
  col1: "nombre", //nombre de campos de json
  col2: "nivel",
  col3: "responsable"
};

const handleVerDetalles = (i) => {
  console.log("Posición del objeto", i);
  console.log("Item:", array[i]);
};

const handleEliminar = (e) => {
  const id = e.target.id;
  console.log("ID de Item a eliminar:", id);
};

export default function ContTabla() {
  return (
    <Tabla
      handleVerDetalles={handleVerDetalles}
      handleEliminar={handleEliminar}
      conf={conf}      
      array={array}
    />
  );
}
