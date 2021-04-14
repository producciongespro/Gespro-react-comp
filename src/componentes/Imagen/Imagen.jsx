import { useEffect, useState } from "react";

const Imagen = (props) => {
  const alt = props.alt;
  const imgFallback = props.imgFallback;
  const className = props.className;
  const [isError, setIsError] = useState(false);
  const [url, setUrl] = useState(props.url);

  const validarError = (e) => {
    //console.log("Error", e);
    setIsError(true);
  };

  useEffect(() => {
    if (isError) {
      setUrl(imgFallback);
    }
    console.log(url);
  }, [isError]);

  return (
    <img className={className} onError={validarError} src={url} alt={alt} />
  );
};

export default Imagen;
