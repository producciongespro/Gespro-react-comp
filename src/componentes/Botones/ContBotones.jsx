import Botones from './Botones';
import ejBotones from './ej_botones.json';

export default function ContBotones() {
    // colores: azul, naranja, verde, crema
    const conf= {
        "orienta": "linea",
        "color": "crema"
    }

    const handleSeleccionarBtn=(i)=> {        
        const item= ejBotones[i];
        console.log("Posición ", i, "Item:", item );

    }

    return (
        <Botones conf={conf} array={ejBotones} handleSeleccionarBtn={handleSeleccionarBtn} />
    )

    
    
}