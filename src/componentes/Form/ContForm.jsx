import Form from "./Form";

// types: date, number, email, text, range, url

const inputs =[
    {
        id: "nombre",
        type: "text",
        label: "Nombre",
        placeholder: "Escriba su nombre",
        maxLength: 64,
        disabled: false,
        required: true
    },
    {
        id: "correo",
        type: "email",
        label: "Correo",
        placeholder: "Debe ser correo mep",
        maxLength: 20,
        disabled: false,
        required: true
    },
    {
        id: "fecha",
        type: "date",
        label: "Fecha nacimiento",
        placeholder: "",
        maxLength: 20,
        disabled: false,
        required: true
    },
    {
        id: "url",
        type: "url",
        label: "url",
        placeholder: "",
        maxLength: 256,
        disabled: false,
        required: true
    }
  
]

const getDataForm=(data)=> {
    console.log("Dataos a enviar al servidor", data);
}

const ContForm = () => {
  return <Form  getDataForm={getDataForm} inputs={inputs} />;
};

export default ContForm;
