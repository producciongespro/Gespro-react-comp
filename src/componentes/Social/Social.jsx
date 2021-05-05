/*
Referencia de librería octicons: (utilizada para generear iconos)
https://primer.style/octicons/
https://primer.style/octicons/packages/react

npm install @primer/octicons-react
*/
import React, { useState } from "react";
import { ThumbsupIcon, ThumbsdownIcon, EyeIcon } from "@primer/octicons-react";
import "./vendor/animate.min.css";

export default function Social(props) {
  const conf = props.config;
  const item = props.item;
  const [likes, setLikes] = useState(props.item.likes);
  const [dislikes, setDislikes] = useState(props.item.dislikes);
  const [stateLike, setStateLike] = useState(false);
  const [stateDislike, setStateDislike] = useState(false);
  
  const handleLikesDislikes = (e) => {
    const data = {
      id: item.id,
      like: 0,
      dislike: 0,
    };
    //console.log(e.currentTarget.id);
    //LIKES --------------------------------
    if (e.currentTarget.id === "btnLike" ) {
      if (stateLike) {
        setStateLike(false);
        setLikes(props.item.likes);
        data.like = -1;        
      } else {
        setStateLike(true);
        //coprueba si el dislike fue seleccionado antes
        if (stateDislike) {
          setStateDislike(false);
          //Se resetea el conteo de dislikes a su número original:
          setDislikes(props.item.dislikes);
          data.dislike = -1;
        }

        setLikes(props.item.likes + 1);        
        data.like = 1;
      }
    }

    //DISLIKES ------------------
    if (e.currentTarget.id === "btnDislike" ) {
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
          setLikes(props.item.likes);
          data.like = -1;
        }
        setDislikes(props.item.dislikes + 1);        
        data.dislike = 1;
      }
    }
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
          className={stateLike ? "animate__animated animate__bounce" : null }
          size={conf.size}
          fill={stateLike ?  conf.fill2 :  conf.fill}
          aria-label="me gusta"
        />
        <br />
        <span style={ stateLike ?  { color: conf.fill2 } : { color: conf.fill }  } > {likes}</span>
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
          className={stateDislike ? "animate__animated animate__flip" : null }
          size={conf.size}
          fill={ stateDislike ?  conf.fill2 : conf.fill }
          aria-label="no me gusta"
        />
        <br />
        <span style={ stateDislike ?   {  color: conf.fill2 }  : {  color: conf.fill }   }> {dislikes}</span>
      </div>
      <div className="col-4 text-center">
        <EyeIcon size={conf.size} fill={conf.fill} aria-label="vistas" />
        <br />
        <span style={{ color: conf.fill }}> {item.views}</span>
      </div>
    </div>
  );
}
