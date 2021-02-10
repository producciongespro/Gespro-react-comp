import CeldaDias from "./CeldasDias";
import EncabezadoCal from "./EncabezadoCal";

export default function Calendario() {
  const hoy = {
    dia: 10,
    mes: 2,
    anno: 2021,
  };

  return (
    <>
      <EncabezadoCal hoy={hoy} />
      <CeldaDias hoy={hoy} idMes="2" />
    </>
  );
}
