import Tabla from "./Tabla";
import array from "./ej_tabla.json";


const confTabla = {
  alterna: true,
  oscura: false,
  indice: false,
  ver: true,
  eliminar: true,
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
      //Método para obtener el id del registro - se activa con el botón "eliminar" <<< Propiedad no requerida >>> :
      obtenerId={obtenerIdItemTabla}
      // Método para obtner todos los campos del registro - Se activa con el botón "ver" <<<Propiedad no requerida  >>>:
      obtenerItem={obtenerItemTabla}
      //Propiedades requeridas:
      conf={confTabla}      
      array={array}
    />
  );
}
