import Form from "./Form";
import controles from "./data/controles.json";
import chekboxes from "./data/chekboxes.json";
import inputs from "./data/inputs.json";
import estudianteForm from "./data/estudianteForm.json";
import {sendFormData} from "./utils";

const URL_API = "http://localhost:3500/api/estudiantes";

const getDataForm = async (data) => {
  console.log("Dataos a enviar al servidor", data);

  const items = [
    { name: "foto", val: data.foto[0] },
    { name: "correo", val: data.correo },
    { name: "nombre", val: data.nombre }
  ];

  const resp = await sendFormData(URL_API, items);
  console.log(resp);
};

/* 
-Tipos de imputs testeados:
 *input types: text, password, date, number, email,  range, url, file
 
 -Tipos de contorles admitidos:
  *control: input, textarea, select, chekbox
 */

const ContForm = () => {
  return <Form getDataForm={getDataForm} array={estudianteForm} />;
};

export default ContForm;
