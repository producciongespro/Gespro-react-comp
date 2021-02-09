export default function Tabla(props) {
  let claseBoostrap = "table ";
  props.conf.oscura && (claseBoostrap = claseBoostrap + " table-dark ");
  props.conf.alterna && (claseBoostrap = claseBoostrap + " table-striped ");
  console.log(claseBoostrap);

  return (
    <table className={claseBoostrap}>
      <thead>
        <tr>
          {props.encabezado.map((item, i) => (
            <th key={i} scope="col">
              {item}
            </th>
          ))}
          <th className="text-center">Ver</th>
          <th className="text-center">Editar</th>
        </tr>
      </thead>
      <tbody>
        {props.array.map((item, i) => (
          <tr key={i}>
            <th scope="row"> {i + 1} </th>
            <td> {item.nombre} </td>
            <td> {item.nivel} </td>
            <td> {item.responsable} </td>
            <td className="text-center">
              <button
                onClick={() => props.handleVerDetalles(i)}
                className="btn btn-success btn-sm px-3"
              >
                👁️
              </button>
            </td>
            <td className="text-center">
              <button 
              id={item.id} 
              onClick={ props.handleEliminar }
              className="btn btn-info btn-sm px-3">
              ✏️
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
