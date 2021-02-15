import Tarjetas from "./Tarjetas";
import array from "./alimnetos.json";

const handleObtenerDetalleTarjeta = (i) => {  
  console.log("Pos", id);  
  console.log(array[i] );
};

const conf = {
  img: true, //Si contienes imagenes  img=true
  col: "sm-3", //Columna boostrap
  hx: 4, //tamaño del títitulo (1 - 6) Ej si es (h1) hx= 1
  titulo: "titulo", // nombre del campo con la iformación que se depliega en el título de la tarjeta
  descripcion: "descripcion", //nombre del campo de la descripción
};

export default function ContTarjetas() {
  return (
    <Tarjetas
      handleObtenerDetalleTarjeta={handleObtenerDetalleTarjeta}
      conf={conf}
      array={array}
    />
  );
}
