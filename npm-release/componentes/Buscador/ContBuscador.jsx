import Buscador from "./Buscador";
import array from "./ej_tabla.json";

const obtenerFiltrados = (f) => {
  console.log("Filtrados---->", f);
};

export default function ContBusador() {
  return (
    <div className="row">
      <div className="col-sm-12">
        <Buscador obtenerFiltrados={obtenerFiltrados} array={array} />
      </div>
    </div>
  );
}
