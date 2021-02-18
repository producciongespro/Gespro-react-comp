import React, { useState } from "react";
import Login from './Login';
import Main from './Main';
const URL_API_LOGIN = "http://localhost/webservices/login/login.php";

export default function ContLogin() {
  const [conectado, setConectado] = useState(false);

  const desbloquear = (valor) => {
    console.log("valor", valor);
    setConectado(valor);
  };

  return conectado ? <Main /> : <Login urlApi={URL_API_LOGIN} desbloquear={desbloquear} />;
}
