import Tabla from "./Tabla";
import array from "./ej_tabla.json";


const conf = {
  alterna: false,
  oscura: true,
  indice: false,
  encabezado: ["Nivel", "Nombre", "Responsable"], //Títulos de tabla (Primera fila encabezado)
  campos: [ "nivel", "nombre", "responsable" ]  // Nombre de los cmapos del json
  
};

const getItem = (item) => {  
  console.log("Item:", item);
};

const getIdTitem = (id) => { 
  console.log("ID de Item a eliminar:", id);
};

export default function ContTabla() {
  return (
    <Tabla
      getItem={getItem}
      getIdTitem={getIdTitem}
      conf={conf}      
      array={array}
    />
  );
}
