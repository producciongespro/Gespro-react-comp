import Calendario from './Calendario';


// tamaño de fuente ---> T
// Dos tamaños s, m (medium, large)
const confCalendario= {
    t: "m"
  }

const obtenerFecha=(fecha)=> {
    console.log("fecha seleccionada:", fecha);
}

const obtenerIdMes=(idMes)=> {
    console.log(idMes);
}
  



export default function ContCalendario () {

    return (
        <div className="row">
            <div className="col-12">
                <Calendario obtenerIdMes={obtenerIdMes} obtenerFecha={obtenerFecha} conf={confCalendario} />
            </div>
        </div>
    )
    
}