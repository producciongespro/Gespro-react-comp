
exports.almacenar = function (nombre, valor) {
    //console.log(nombre, "--->", valor);
    //Priemro verifica que el dato localstorage esté almacenado    
    let tmpData = localStorage.getItem(nombre);
    let isAlmacenado=null;

    if (tmpData) {
        //------- Instrucciones si encuentra el dato en LS
        //parserar el string a json
        tmpData = JSON.parse(tmpData);
        //Antes de almacenar verifica que no se encuentre en el array 
        //para evitar elementos duplicados 
        //console.log(tmpData);
        const indice = tmpData.indexOf(valor);
        //console.log("indice", indice);
                // Si el índice es igual a -1 significa que no el elemento no está agregado 
                // por lo que procede a inlcuirlo
                if (indice === -1) {
                    //hace el push en el arreglo en memroia 
                    tmpData.push(valor);
                    //crar un nuevo arreglo en localsotarge con el dato actualizado (Sustiuye el que estaba en LS)
                    localStorage.setItem(nombre, JSON.stringify(tmpData));
                    isAlmacenado=true;
                } else {
                    //si el índice es mayor a -1 singifica que ay est´+a el elemento por lo tanto 
                    //no icnluye nada
                    //console.log("El valor ya ha sido agregado anteriormente");
                    isAlmacenado=false;
                }
                
    } else {
        //------- Instrucciones si NO encuentra el dato en LS
        //Convierte tmpData a array
        tmpData=[];
        //Inserta el valor:
        tmpData.push(valor);
        //Crea el dato LS por primera vez
        localStorage.setItem(nombre, JSON.stringify(tmpData));
        isAlmacenado=true;
    }
    return isAlmacenado;
}

exports.recuperar = function (nombre) {
    //console.log("nombre en obtener", nombre);
    let tmpData = localStorage.getItem(nombre);
    return JSON.parse(tmpData);
}

exports.encontrado= function (nombre, valor) {
    let indice=-1;
    let tmpData = localStorage.getItem(nombre);
    if (tmpData) {
        tmpData= JSON.parse(tmpData);
        indice= tmpData.indexOf(valor);
    }
  return indice;
}

exports.remover= function (nombre, valor) {
    let tmpData = localStorage.getItem(nombre);
    let isEliminado=false;
    if (tmpData) {
        tmpData= JSON.parse(tmpData);
        const indice= tmpData.indexOf(valor);
        //console.log("tmpData",tmpData);
        //console.log("indice del LS", indice);        
        tmpData.splice(indice,1);        
        //console.log("tmpData después del splice", tmpData);
        localStorage.setItem(nombre, JSON.stringify(tmpData) );
        isEliminado=true;                
    }
    return isEliminado;
}


