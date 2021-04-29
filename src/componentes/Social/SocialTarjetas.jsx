import Social from "./Social";
import alimentos from "./alimentos.json";

console.log(alimentos);

export default function SocialTarjetas(params) {
  const configSocial = {
    fill: "#ff5733",
    background: "#0ab3f2",
    size: "medium",
    maxTimes: 3,
  };

  const putLikesDislikes =(data)=> {
    console.log(data);
  }

  return (
    <div className="row">
      {alimentos.map((item) => (
        <div className="col-4" key={item.id}>
          <div className="card">
            <div className="card-title">
              <h1>{item.titulo} </h1>
            </div>
            <div className="card-body">{item.descripcion}</div>
            <div className="card-footer">
              <Social
                putLikesDislikes={putLikesDislikes}
                item={item}
                config={configSocial}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
