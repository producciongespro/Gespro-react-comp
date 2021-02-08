/* 
Funciones Ajax: get y post
akiri del esperanto signfica obtener
*/

/* 
obtener: obtiene una respuesta de servidor y la parse a json
inputs-> url: url de API para obtener los datos
output-> respuesta de servidor en formato JSON

*/
exports.getData = async function (url) {
  const resp = await fetch(url);
  //console.log("response--->",resp);
  const json = await resp.json();
  //console.log("json-->",json);
  return json;
};

exports.sendData = async function (url, data) {
  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    }
  });
  let json= await resp.json();
    return json;
};
