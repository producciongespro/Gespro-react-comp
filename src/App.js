import ContLogin from './componentes/Login/ContLogin';
import ContTarjetas from './componentes/Tarjetas/ContTarjetas';
import ContBotones from "./componentes/Botones/ContBotones";
import ContTabla from './componentes/Tabla/ContTabla';
import ContBuscador from './componentes/Buscador/ContBuscador';
import ContBuscadorTarjetas from './componentes/Buscador/ContBuscadorTarjetas';
import ContBuscadorTabla from './componentes/Buscador/ContBuscadorTabla';
import ContCalendario from './componentes/Calendario/ContCalendario';


function App() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>RP GESPRO </h1>
        <h6>Recursos de Programación GESPRO</h6>
        <p>
          Funciones JS y componentes React JS
        </p>
      </div>      
        <ContCalendario />            
    </div>
  );
}

export default App;
