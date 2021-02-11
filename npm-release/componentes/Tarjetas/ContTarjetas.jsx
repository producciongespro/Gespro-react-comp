import Tarjetas from "./Tarjetas";
import { filtrarId } from "../../_complementos/filtrar_array";
import array from "./alimnetos.json";

const handleObtenerDetalleTarjeta = (e) => {
  const id = e.target.id;
  console.log(id);
  let item = filtrarId(array, id);
  console.log(item);
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
