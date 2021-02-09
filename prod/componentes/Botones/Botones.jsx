import React, { useRef } from 'react';
import "./botones.css";

export default function Botones(props) {
  const refBotones = useRef();
  refBotones.current = [];

  const agregarRefBotones = (item) => {
    refBotones.current.push(item);
    console.log(refBotones.current);
  };

  const handleSeleccionarBtn=(i)=> {
    //Elimina la clase de btn selecionado a toda la lista de botones:
    eliminarClaseSelect( refBotones.current );
    const btn= refBotones.current[i];
    //console.log(btn);
    btn.classList.add("btn-seleccionado");
    props.handleSeleccionarBtn(i);
  }

  const eliminarClaseSelect=(array)=> {
    const limite= array.length;
    for (let index = 0; index < limite; index++) {      
      array[index ].classList.remove("btn-seleccionado");      
    }
  }


  const establecerClase = (conf) => {
    const clase = "btn-" + conf.estilo + " " + conf.orienta;
    return clase;
  };

  return props.array.map((item, i) => (
    <button 
        className={establecerClase(props.conf)} 
        key={i}
        onClick={()=> handleSeleccionarBtn(i) }
        ref={agregarRefBotones}
        >
      {item.nombre}
    </button>
  ));
}
