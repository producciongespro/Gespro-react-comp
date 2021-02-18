import Calendario from './Calendario';


// tamaño de fuente ---> T
// Dos tamaños s, m (medium, large)
const confCalendario= {
    t: "m"
  }
  



export default function ContCalendario () {

    return (
        <div className="row">
            <div className="col-4">
                <Calendario conf={confCalendario} />
            </div>
        </div>
    )
    
}