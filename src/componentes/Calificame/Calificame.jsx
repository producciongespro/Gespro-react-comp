import "./calificame.css";
//Se importa las imgs debido a que se encuentran  en la carpeta del componente
import full from "./full.png";
import dif from "./dif.png";
import gris from "./gris.png";

export default function Calificame({ idApp, tipoBtn, flotante, tamano }) {
  const url = `https://recursos.mep.go.cr/0_calificame/app/index.html?id_app=${idApp}`;
  const titulo = "Califica mi curso";

  return (
    <a href={url} target="_blank">
      {tipoBtn === "gris" && (
        <img
          className={`${tamano} calificador ${flotante ? "flotante-"+flotante : "" }`}
          title={titulo}
          src={gris}
          alt="imagen en gris"
        />
      )}
      {tipoBtn === "full" && (
        <img
        className={`${tamano} calificador ${flotante ? "flotante-"+flotante : "" }`}
          title={titulo}
          src={full}
          alt="imagen en full color"
        />
      )}
      {tipoBtn === "dif" && (
        <img
        className={`${tamano} calificador ${flotante ? "flotante-"+flotante : "" }`}
          title={titulo}
          src={dif}
          alt="imagen difuminada"
        />
      )}
    </a>
  );
}
