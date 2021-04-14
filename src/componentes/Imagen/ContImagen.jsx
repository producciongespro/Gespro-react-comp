import Imagen from "./Imagen";
const imgFallback = "./assets/404/img-not-found.png";

const imagenes = [
  {
    urlImg: "./assets/png/food1.png",
    alt: "Alimento 1",
  },
  {
    urlImg: "./assets/png/food246.png",
    alt: "Alimento 2",
  },
  {
    urlImg: "./assets/png/food3.png",
    alt: "Alimento 3",
  }
];

console.log(imagenes[0].urlImg);

const ContImagen = () => {
  return (
    <div className="row">
      {imagenes.map((item, i) => (
        <div className="col-3 text-center" key={i}>
          <Imagen
            className="img-fluid"
            url={item.urlImg}
            alt={item.alt}
            imgFallback={imgFallback}
          />
        </div>
      ))}
    </div>
  );
};

export default ContImagen;
