import Tabla from "./Tabla";
import array from "./ej_tabla.json";


const confTabla = {
  alterna: false,
  oscura: true,
  indice: false,
  ver: false,
  eliminar: false,
  encabezado: ["Nivel", "Nombre", "Responsable"], //Títulos de tabla (Primera fila encabezado)
  campos: [ "nivel", "nombre", "responsable" ]  // Nombre de los cmapos del json
  
};

const obtenerItemTabla = (item) => {  
  console.log("Item:", item);
};

const obtenerIdItemTabla = (id) => { 
  console.log("ID de Item a eliminar:", id);
};

export default function ContTabla() {
  return (
    <Tabla
      obtenerId={obtenerIdItemTabla}
      obtenerItem={obtenerItemTabla}
      conf={confTabla}      
      array={array}
    />
  );
}
