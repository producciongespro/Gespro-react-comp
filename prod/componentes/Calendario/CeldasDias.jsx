import dias from "./dias.json";
import meses from "./meses.json";
import { filtrarId } from "gespro-utils/filtrar_array";
import "./celda_dias.css";

export default function CeldasDias(props) {
  let mesMontado = filtrarId(meses, props.idMes);
  var consecutivo = [];
  const claseTamano = "cal-" + props.conf.t;

  const handlerSelectDia = (e) => {
    let id = e.target.id;
    console.log("id", id);
  };

  const crearGrilla = () => {
    let contDia = 1;
    for (let index = 0; index < 39; index++) {
      if (index >= mesMontado.inicio) {
        if (contDia <= mesMontado.maximo) {
          consecutivo.push(contDia);
        } else {
          consecutivo.push(0);
        }
        contDia++;
      } else {
        consecutivo.push(0);
      }
    }
    //        console.log(consecutivo);
  };

  const jsxCelda = (item, i) => {
    let claseCelda = null;
    if (props.hoy.dia === item && props.hoy.mes === parseInt(mesMontado.id)) {
      claseCelda = "celda-hoy";
    } else {
      claseCelda = "celda";
    }

    let tmpCelda = (
      <div
        key={"grid" + i}
        tabIndex="2"
        id={mesMontado.renderMes + item}
        onClick={handlerSelectDia}
        onKeyPress={handlerSelectDia}
        className={claseCelda + " " + claseTamano}
        role="button"
        ref={props.agregarRefs}
      >
        {item}
      </div>
    );

    let tmpCeldaCero = (
      <div
        key={"grid" + i}
        tabIndex="2"
        id={mesMontado.renderMes + "0" + item}
        onClick={handlerSelectDia}
        onKeyPress={handlerSelectDia}
        className={claseCelda + " " + claseTamano}
        role="button"
        ref={props.agregarRefs}
      >
        {item}
      </div>
    );

    return item <= 9 ? tmpCeldaCero : tmpCelda;
  };

  crearGrilla();

  return (
    <div className="contenedor fondo-calendario">
      <div className="row">
        {dias.map((item) => (
          <div key={"dia" + item.id} className={"fila-dias " + claseTamano}>
            {item.nombre}
          </div>
        ))}
      </div>
      <div className="row">
        {consecutivo.map((item, i) =>
          item > 0 ? (
            jsxCelda(item, i)
          ) : (
            <div key={"grid" + i} className="celda-des"></div>
          )
        )}
      </div>
    </div>
  );
}
