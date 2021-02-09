import "./botones.css";

export default function Botones(props) {

const establecerClase=(conf)=> {
    const clase= "btn-" + conf.color + " " + conf.orienta ;   
    return clase;    
}


  return props.array.map((item) => (
    <button className={establecerClase (props.conf) } key={"btnMenu" + item.id}>      
      {item.nombre}
    </button>
  ));
}
