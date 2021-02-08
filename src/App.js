//import ContLogin from './componentes/Login/ContLogin';
import ContTarjetas from './componentes/Tarjetas/ContTarjetas';

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
      <ContTarjetas />
    </div>
  );
}

export default App;
