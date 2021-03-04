import Form from "./Form";

// input types: date, number, email, text, range, url
// control: "input", textarea, select, chekbox


const arrayControls = [
  {
    control: "input",
    id: "nombre",
    type: "text",
    label: "Nombre",
    placeholder: "Escriba su nombre",
    maxLength: 64,    
    required: true
  },
  {
    control: "input",
    id: "correo",
    type: "email",
    label: "Correo",
    placeholder: "Debe ser correo mep",
    maxLength: 20    
  },
  {
    control: "chekbox",    
    title: "Postres",
    name: "postres",
    labels: ["Arroz con leche", "Tees leches", "Flan", "Tiramisú", "Gelatina", "Pae Limón"  ],
    required: true
  },  
  {
    control: "textarea",
    label: "Observaciones",
    id: "observaciones",
    rows: "8",
    required: true
  },
  {
    control: "texarea",
    label: "Notas",
    id: "notas",
    rows: "2"    
  },
  {
    control: "input",
    id: "frecuencia",
    type: "range",
    label: "frecuencia",      
    min:"25",
    max:"50",
    defaultValue:"30"
  },
  {
    control: "select",
    id: "frutas",
    label:"Frutas",
    required: true,
    opts: [{text:"Mango", value: 1 }, {text:"Sandía", value: 2 }, {text:"Piña", value: 3 }     ]
  },
  {
    control: "select",
    id: "autos",
    label:"Autos",
    required: true,
    opts: [{text:"Toyota", value: 1 }, {text:"Mitsubishi", value: 2 }, {text:"Hyundai", value: 3 }, {text:"Nissan", value: 4 }     ]
  }
]

const getDataForm = (data) => {
  console.log("Dataos a enviar al servidor", data);
};

const ContForm = () => {
  return <Form getDataForm={getDataForm} array={arrayControls} />;
};

export default ContForm;
