import Buscador from "./Buscador";
import array from "./ej_tabla.json";

export default function ContBusador() {
  return (
    <div className="row">
      <div className="col-sm-12">
        <Buscador array={array} />
      </div>
    </div>
  );
}
