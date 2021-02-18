import Botones from "./Botones";
import array from "./ej_botones.json";

  // estilos: twitter, round, grass
  // orienta: linea, bloque
  const confBotones = {
    orienta: "linea",
    estilo: "twitter",
  };

  const obtenerBtn = ( item ) => {
    //Obtiene el botón seleccionado:        
    console.log( "Item:", item);
  };




export default function ContBotones() {  

  return (
    <Botones      
      conf={confBotones}
      array={array}
      obtenerBtn={obtenerBtn}
    />
  );
}
