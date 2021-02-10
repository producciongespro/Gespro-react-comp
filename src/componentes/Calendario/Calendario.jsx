import CeldaDias from './CeldasDias';


export default function Calendario () {

    const hoy={
        dia: 10,
        mes: 2,
        anno: 2021
    }

    return (
        <div className="row">
            <div className="col-sm-12">
                <CeldaDias hoy={hoy} idMes="2" />
            </div>
        </div>
    )
    
}

