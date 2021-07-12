/*
Referencia de librería octicons: (utilizada para generear iconos)
https://primer.style/octicons/
https://primer.style/octicons/packages/react

npm install @primer/octicons-react
*/
import React, { useState, useEffect } from "react";
import { ThumbsupIcon, ThumbsdownIcon, EyeIcon } from "@primer/octicons-react";
import "./vendor/animate.min.css";

// id del item actual
//Se utiliza para comparar si ha caregado una palabra nueva para resetear los estados
let tmpId = null;

//Arreglo de objetos con info de las palabras que les ha dado likes y dislikes
let tmpLikesDislikes = [];

export default function Social(props) {
  // console.log("props.item", props.item);

  const conf = props.config;
  const item = props.item;

  //Parsing to Integer
  item.likes = parseInt(item.likes);
  item.dislikes = parseInt(item.dislikes);

  // console.log("------item",item);

  //Estados que se despliegan en tarjetas:
  const [likes, setLikes] = useState(item.likes);
  const [dislikes, setDislikes] = useState(item.dislikes);

  const [stateLike, setStateLike] = useState(false);
  const [stateDislike, setStateDislike] = useState(false);

  useEffect(() => {
    //console.log("updated");
    setup(item.id);
  });

  const setup = (id) => {
    //console.log("tmpId", tmpId);
    //console.log("id", id);
    if (!tmpId) {
      // Cuando el componente se carga por primera vez
      tmpId = id;
      setLikes(item.likes);
      setDislikes(item.dislikes);
    } else {
      if (tmpId !== id) {
        // si carga otra palabra
        //resetea los estados
        setStateLike(false);
        setStateDislike(false);
        //Verifica si ese item ya exites en el array temporal

        //Carga el item del arreglo tmpLikesDislikes
        //mediante la función getTmpInfo
        //Si es vaíldo es poruqe se le ha dado like o dislike en algún momento
        let tmpItem = getTmpInfo(item.id);
        console.log("tmpItem>>>>>---", tmpItem);
        //etiquetas de cantidades likes y dislikes de tarjeta (palabra)
        if (tmpItem) {
          item.likes = tmpItem.likes;
          item.dislikes = tmpItem.dislikes;

          //Modificación de estados likes y dislikes
          //LIKES
          if (tmpItem.state === "likes") {
            setStateLike(true);
          }
          //DISLIKES
          if (tmpItem.state === "dislikes") {
            setStateDislike(true);
          }
        }

        //carga los estados con la información del nuevo item:
        setLikes(item.likes);
        setDislikes(item.dislikes);
        //Asigna el nuevo id
        tmpId = id;
      }
    }
  };

  const setTmpInfo = (tipo) => {
    let encontrado = false;
    if (tmpLikesDislikes.length > 0) {
      tmpLikesDislikes.forEach((element) => {
        //Busca en el array si exite el objeto con el id actual
        if (element.id === item.id) {
          encontrado = true;
        }
      });
    }
    if (!encontrado) {
      //Si no está encontrado creamos el objeto con la información
      //ya sea con el like o dislike que ingresó el usuario
      const tmp = {
        id: item.id,
        likes: tipo === "likes" ? item.likes + 1 : item.likes,
        dislikes: tipo === "dislikes" ? item.dislikes + 1 : item.dislikes,
        state: tipo,
      };
      tmpLikesDislikes.push(tmp);
    }

    console.log("tmpLikesDislikes", tmpLikesDislikes);
  };

  const getTmpInfo = (id) => {
    //recorre el array para determinar si la palabra ya está guardada
    //debido a que le dio like o dislike
    //console.log("///////tmpLikesDislikes", tmpLikesDislikes);
    //console.log("///////id", id);
    let tmpElement = null;
    if (tmpLikesDislikes.length > 0) {
      //console.log("Inicio de BUSQUEDA::::");
      tmpLikesDislikes.forEach((element) => {
        //console.log("element.id", element.id);
        if (element.id === id) {
          tmpElement = element;
        }
      });
    }
    return tmpElement;
  };

  const handleLikesDislikes = (e) => {
    const data = {
      id: item.id,
      like: 0,
      dislike: 0,
    };
    console.log(e.currentTarget.id);
    //LIKES --------------------------------
    if (e.currentTarget.id === "btnLike") {
      if (stateLike) {
        //Si antes fue seleccionado el like
        setStateLike(false);
        //Se le asigna la cantidad original
        setLikes(props.item.likes);
        //Se envia LIKE - al servidor
        data.like = -1;
      } else {
        //Si no fue clickeado el like antes:
        setStateLike(true);
        //coprueba si el dislike fue seleccionado antes
        if (stateDislike) {
          setStateDislike(false);
          //Se resetea el conteo de dislikes a su número original:
          setDislikes(props.item.dislikes);
          data.dislike = -1;
        }
        //incrementa el like y envia LIKE 1 al servidor
        setLikes(props.item.likes + 1);
        data.like = 1;
      }
      //Alamacena en array el item que le dio like
      setTmpInfo("likes");
    }

    //DISLIKES ------------------
    if (e.currentTarget.id === "btnDislike") {
      if (stateDislike) {
        setStateDislike(false);
        setDislikes(props.item.dislikes);
        data.dislike = -1;
      } else {
        setStateDislike(true);
        //coprueba si el like fue seleccionado antes
        if (stateLike) {
          //Se deshabilita el like
          setStateLike(false);
          //Se resetea el conteo de likes a su número original:
          setLikes(likes);
          data.like = -1;
        }
        setDislikes(dislikes + 1);
        data.dislike = 1;
      }
      //Alamacena en array el item que le dio dislike
      setTmpInfo("dislikes");
    }
    //console.log(data);
    props.putLikesDislikes(data);
  };

  return (
    <div className="row">
      <div
        id="btnLike"
        className="col-4 text-center"
        role="button"
        onClick={handleLikesDislikes}
      >
        <ThumbsupIcon
          verticalAlign="middle"
          className={stateLike ? "animate__animated animate__bounce" : null}
          size={conf.size}
          fill={stateLike ? conf.fill2 : conf.fill}
          aria-label="me gusta"
        />
        <br />
        <span style={stateLike ? { color: conf.fill2 } : { color: conf.fill }}>
          {likes}
        </span>
      </div>
      <div
        id="btnDislike"
        className="col-4 text-center"
        style={
          stateDislike
            ? { backgroundColor: conf.background, borderRadius: "25%" }
            : null
        }
        role="button"
        onClick={handleLikesDislikes}
      >
        <ThumbsdownIcon
          verticalAlign="middle"
          className={stateDislike ? "animate__animated animate__flip" : null}
          size={conf.size}
          fill={stateDislike ? conf.fill2 : conf.fill}
          aria-label="no me gusta"
        />
        <br />
        <span
          style={stateDislike ? { color: conf.fill2 } : { color: conf.fill }}
        >
          {dislikes}
        </span>
      </div>
      <div className="col-4 text-center">
        <EyeIcon size={conf.size} fill={conf.fill} aria-label="vistas" />
        <br />
        <span style={{ color: conf.fill }}> {item.views}</span>
      </div>
    </div>
  );
}
