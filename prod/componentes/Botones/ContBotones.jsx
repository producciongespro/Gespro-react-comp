import Botones from "./Botones";
import ejBotones from "./ej_botones.json";

export default function ContBotones() {  


  // estilos: twitter, round, grass
  // orienta: linea, bloque
  const conf = {
    orienta: "bloque",
    estilo: "round",
  };

  const handleSeleccionarBtn = (i) => {    
    const item = ejBotones[i];
    console.log("Posición ", i, "Item:", item);
  };

  return (
    <Botones      
      conf={conf}
      array={ejBotones}
      handleSeleccionarBtn={handleSeleccionarBtn}
    />
  );
}
