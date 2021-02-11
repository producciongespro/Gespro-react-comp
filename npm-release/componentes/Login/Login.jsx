import React, { useRef, useState } from 'react';
import './login.css';
import {sendData} from '../../_complementos/akiri';
const URL_API_LOGIN = "http://localhost/rpGespro/webservices/login/login.php";




export default function Login( props ) {
    const [IsWait, setIsWait ]=useState(false);
    const [error, setError]=useState(null);

    const refCorreo= useRef(null);
    const refClave= useRef(null);

    const handleLogin= async ()=> {
        setIsWait(true)
        const data= {
            "usuario" : refCorreo.current.value,
            "clave": refClave.current.value
        }
        console.log("datos a enviar", data);      

        const resp = await sendData (URL_API_LOGIN, data);
        console.log("respuesta del servidor:" , resp);        
        setIsWait(false);
        resp.conectado && props.desbloquear(resp.conectado);                
        resp.error && setError(resp.error);
        
       
    }

  return (
    <div className="login">
      <div className="row">
        <div className="col-sm-4 offset-sm-4 mt-5 pt-5">
          <div className="card">
            <div className="card-header text-center">
              <h1> 🌋 Inicio </h1>
            </div>
            <div className="card-body">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="spnCorreo">
                    📧
                  </span>
                </div>
                <input
                  type="email"
                  defaultValue="jime@correo.de"
                  className="form-control"
                  placeholder="correo"
                  aria-label="email"
                  ref={refCorreo}
                  aria-describedby="spnCorreo"
                />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="spnClave">
                    🔒
                  </span>
                </div>
                <input
                  type="password"
                  defaultValue="123"
                  className="form-control"
                  placeholder="clave"
                  aria-label="password"
                  ref={refClave}
                  aria-describedby="spnClave"                  
                />
              </div>

              {
                  error && <div className="alert alert-danger" role="alert"> {error} </div>
              }

              <button 
                className="btn btn-info btn-large btn-block"
                onClick={handleLogin}
                disabled={ IsWait  }
                >
                Acceder {IsWait && <span>⌛</span>  }
              </button>

              <div className="card-footer">
                ¿olvidó su contraseña? <a href="http://"> recuperar </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
