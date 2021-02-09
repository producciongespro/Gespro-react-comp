
exports.filtrarKey =  function (array, llave, valor, metodo) {    
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

exports.filtrarId =  function (array, id) {     
    //console.log("array recibido", array);
    const limite= array.length;
    let item=null;
    id= id.toString();
    //console.log("id recibidia", id);
    for (let index = 0; index < limite; index++) {
        if (array[index].id === id) {
            item = array[index]
        }        
    }
    return item;
}
