import Calendario from './Calendario';


// tamaño de fuente ---> T
// Dos tamaños s, m l (small, medium, large)
const conf= {
    t: "l"
  }
  



export default function ContCalendario () {

    return (
        <div className="row">
            <div className="col-12">
                <Calendario conf={conf} />
            </div>
        </div>
    )
    
}