import Buscador from "./Buscador";
import array from "./ej_tabla.json";

export default function ContBusador() {
  const obtenerFiltrados = (f) => {
    console.log("Filtrados", f);
  };

  return (
    <div className="row">
      <div className="col-sm-12">
        <Buscador obtenerFiltrados={obtenerFiltrados} array={array} />
      </div>
    </div>
  );
}
