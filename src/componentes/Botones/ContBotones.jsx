import Botones from "./Botones";
import array from "./ej_botones.json";

  // estilos: twitter, round, grass
  // orienta: linea, bloque
  const conf = {
    orienta: "linea",
    estilo: "round",
  };

  const handleSeleccionarBtn = (i) => {    
    const item = array[i];
    console.log("Posición ", i, "Item:", item);
  };




export default function ContBotones() {  

  return (
    <Botones      
      conf={conf}
      array={array}
      handleSeleccionarBtn={handleSeleccionarBtn}
    />
  );
}
