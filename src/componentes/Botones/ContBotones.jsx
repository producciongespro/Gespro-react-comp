import Botones from "./Botones";
import array from "./ej_botones.json";

  // estilos: twitter, round, grass
  // orienta: linea, bloque
  const conf = {
    orienta: "linea",
    estilo: "round",
  };

  const getBtn = ( item ) => {
    //Obtiene el botón seleccionado:        
    console.log( "Item:", item);
  };




export default function ContBotones() {  

  return (
    <Botones      
      conf={conf}
      array={array}
      getBtn={getBtn}
    />
  );
}
