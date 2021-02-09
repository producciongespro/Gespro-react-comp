import Tarjetas from './Tarjetas';
import {filtrarId} from '../../_complementos/filtrar_array';

import alimentos from './alimnetos.json';



export default function ContTarjetas() { 
    
    const handleObtenerDetalleTarjeta=(e)=> {
        const id= e.target.id;
        console.log(id);
        let item= filtrarId(alimentos, id);
        console.log(item);
    }
    

    const conf= {
        "img": true, //Si contienes imagenes  img=true
        "col": "sm-4", //Columna boostrap
        "hx": 5 //tamaño del títitulo (1 - 6) Ej si es (h1) hx= 1
    }

    return (
        alimentos &&
            <Tarjetas handleObtenerDetalleTarjeta={handleObtenerDetalleTarjeta}  conf={conf} array={alimentos} />
    )
        
    
}