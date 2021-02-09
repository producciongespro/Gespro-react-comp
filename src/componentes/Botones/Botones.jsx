import "./botones.css";

export default function Botones(props) {
  const establecerClase = (conf) => {
    const clase = "btn-" + conf.color + " " + conf.orienta;
    return clase;
  };

  return props.array.map((item, i) => (
    <button 
        className={establecerClase(props.conf)} 
        key={i}
        onClick={()=> props.handleSeleccionarBtn(i) }
        >
      {item.nombre}
    </button>
  ));
}
