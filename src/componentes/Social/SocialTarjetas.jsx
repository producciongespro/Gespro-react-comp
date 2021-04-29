import Social from "./Social";
import alimentos from "./alimentos.json";

console.log(alimentos);

export default function SocialTarjetas(params) {
  //size: "small - medium - large"    
  //fill: defualt color / fill2: highlighted color
  const configSocial = {
    fill: "#0ab3f2",
    fill2: "#ff5733", 
    size: "medium"    
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
