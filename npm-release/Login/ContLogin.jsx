import React, { useState } from "react";
import Login from './Login';
import Portada from './Portada';
const URL_API = "http://localhost/rpGespro/webservices/login/login.php";

export default function ContLogin() {
  const [conectado, setConectado] = useState(false);

  const desbloquear = (valor) => {
    console.log("valor", valor);
    setConectado(valor);
  };

  return conectado ? <Portada /> : <Login urlApi={URL_API} desbloquear={desbloquear} />;
}
