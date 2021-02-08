import Tarjetas from './Tarjetas';

import alimentos from './alimnetos.json';



export default function ContTarjetas() { 
    
    const handleObtenerDetalleTarjeta=(e)=> {
        const id= e.target.id;
        console.log(id);
    }
    

    const conf= {
        "img": true, //Si contienes imagenes  img=true
        "col": "sm-4", //Columna boostrap
        "hx": 5 //tamaño del t´titulo ej si es (h1) hx= 1
    }

    return (
        alimentos &&
            <Tarjetas handleObtenerDetalleTarjeta={handleObtenerDetalleTarjeta}  conf={conf} array={alimentos} />
    )
        
    
}