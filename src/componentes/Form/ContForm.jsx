import Form from "./Form";
import controles from "./data/controles.json";
import chekboxes from "./data/chekboxes.json";
import inputs from "./data/inputs.json";
import estudianteForm from "./data/estudianteForm.json";

const URL_API = "http://localhost:3500/api/estudiantes";

const sendData = async function (url, data) {
  const resp = await fetch(url, {
    method: "POST",
    body: data    
  });
  let json = await resp.json();
  return json;
};

const getDataForm = async (data) => {
  //console.log("Dataos a enviar al servidor", data);

  const formData = new FormData();
  formData.append("foto", data.foto[0]);
  formData.append("correo", data.correo);
  formData.append("nombre", data.nombre);
  console.log(formData);

  console.log(data.correo);

  const resp = await sendData(URL_API, formData);
  console.log(resp);
};

/* 
-Tipos de imputs testeados:
 *input types: text, password, date, number, email,  range, url
 
 -Tipos de contorles admitidos:
  *control: input, textarea, select, chekbox
 */

const ContForm = () => {
  return <Form getDataForm={getDataForm} array={estudianteForm} />;
};

export default ContForm;
