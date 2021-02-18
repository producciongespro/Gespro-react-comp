let claseBoostrap = "table ";

export default function Tabla(props) {
  const conf = props.conf;
  conf.oscura && (claseBoostrap = claseBoostrap + " table-dark ");
  conf.alterna && (claseBoostrap = claseBoostrap + " table-striped ");
  //console.log(claseBoostrap);

  const handleVerDetalles = (i) => {
    props.obtenerItem(props.array[i]);
  };

  const handleObtenerId = (e) => {
    props.obtenerId(e.target.id);
  };

  return (
    <table className={claseBoostrap}>
      <thead>
        <tr>
          {conf.indice && <th scope="col"> # </th>}
          {props.conf.encabezado.map((item, i) => (
            <th key={i} scope="col">
              {item}
            </th>
          ))}
          <th className="text-center">Ver</th>
          <th className="text-center">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {props.array.map((item, i) => (
          <tr key={i}>
            {conf.indice && <th scope="row"> {i + 1} </th>}
            {conf.campos.map((campo, indice) => (
              <td key={"campo" + indice}> {item[campo]} </td>
            ))}

            <td className="text-center">
              <button
                onClick={() => handleVerDetalles(i)}
                className="btn btn-success btn-sm px-3"
              >
                👁️
              </button>
            </td>
            <td className="text-center">
              <button
                id={item.id}
                onClick={handleObtenerId}
                className="btn btn-info btn-sm px-3"
              >
                🗑️
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
