export default function filtrarKey (array, llave, valor, metodo ) {  
    
    valor = valor.toString();
    
    //console.log("*********Filtro por criterio llave", llave);    
    //console.log("******Valor de la llave", valor );        
    //console.log("aaray recibido para filtrar", array); 
    //console.log("filtrarkey desde el Método ",metodo);        
    
    if (array.length > 0) {
        const limite = array.length;
        var tmpData = [];
                

        for (let index = 0; index < limite; index++) { 
            //console.log( array[index][ llave ] );

            if ( array[index][ llave ] === valor  ) {
                tmpData.push(array[index]);
            } 
        }                 
    }
    //console.log("Arreglo retornado", tmpData);    
    return tmpData;
}
