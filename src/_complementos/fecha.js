

export default function fecha(params) {    
    const date = new Date();
    var retorno=null;  

    switch (params) {
        case "today":
            retorno= date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();           
        break;
        case "hoy":
            retorno= date.getDate() +'-'+(date.getMonth()+1)  +'-'+date.getFullYear();
        break;
        case "mes":
            retorno= (date.getMonth()+1);
        break;
        case "dia":
            retorno= date.getDate();
        break;
        case "objHoy": 
            retorno = {
                dia:  date.getDate(),
                mes: date.getMonth()+1,
                anno: date.getFullYear(),
            }

        break;
    
        default:
            retorno="opción descnocida"
            break;
    }
   return retorno; 
}