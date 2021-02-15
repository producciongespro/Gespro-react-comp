import Tarjetas from "./Tarjetas";
import array from "./alimnetos.json";

const getItem = (item) => {
  console.log(item);
};

const conf = {
  img: true, //Si contienes imagenes  img=true
  col: "sm-6", //Columna boostrap
  hx: 1, //tamaño del títitulo (1 - 6) Ej si es (h1) hx= 1
  titulo: "titulo", // nombre del campo con la iformación que se depliega en el título de la tarjeta
  descripcion: "descripcion", //nombre del campo de la descripción
};

export default function ContTarjetas() {
  return <Tarjetas array={array} getItem={getItem} conf={conf} />;
}
