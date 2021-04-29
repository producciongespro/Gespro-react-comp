/*
Referencia de librería octicons: (utilizada para generear iconos)
https://primer.style/octicons/
https://primer.style/octicons/packages/react
*/
import React, { useState } from "react";
import { ThumbsupIcon, ThumbsdownIcon, EyeIcon } from "@primer/octicons-react";

export default function Social(props) {
  const conf = props.config;
  const item = props.item;
  const [likes, setLikes] = useState(props.item.likes);
  const [enableLike, setEnableLike] = useState(true);

  const [dislikes, setDislikes] = useState(props.item.dislikes);
  const [enableDislike, setEnableDislike] = useState(true);

  const [stateLike, setStateLike] = useState(false);
  const [stateDislike, setStateDislike] = useState(false);

  const handleLikesDislikes = (e) => {
    const data = {
      id: item.id,
      value: null,
      state: null,
    };
    //console.log(e.currentTarget.id);
    //LIKES --------------------------------
    if (e.currentTarget.id === "btnLike" && enableLike) {
      if (stateLike) {
        setStateLike(false);
        setLikes(props.item.likes);
        data.state = "like";
        data.value = -1;
      } else {
        setStateLike(true);        
        //coprueba si el dislike fue seleccionado antes
        if (stateDislike) {
            setStateDislike(false);
            //Se resetea el conteo de dislikes a su número original:        
            setDislikes( props.item.dislikes);
        }

        setLikes(props.item.likes + 1);
        data.state = "like";
        data.value = 1;
      }
    }

    //DISLIKES ------------------
    if (e.currentTarget.id === "btnDislike" && enableDislike) {
      if (stateDislike) {
        setStateDislike(false);
        setDislikes(props.item.dislikes);
        data.state = "dislike";
        data.value = -1;
      } else {
        setStateDislike(true);
        //coprueba si el like fue seleccionado antes
        if (stateLike) {
            //Se deshabilita el like
            setStateLike(false);    
            //Se resetea el conteo de likes a su número original:        
            setLikes( props.item.likes);
        }
        setDislikes(props.item.dislikes + 1);
        data.state = "dislike";
        data.value = 1;
      }
    }
    props.putLikesDislikes(data);
  };

  return (
    <div className="row">
      <div
        id="btnLike"
        className="col-4 text-center"
        style={
          stateLike ? { backgroundColor: "yellow", borderRadius: "25%" } : null
        }
        role="button"
        onClick={handleLikesDislikes}
      >
        <ThumbsupIcon
          verticalAlign="middle"
          size={conf.size}
          fill={conf.fill}
          aria-label="me gusta"
        />
        <br />
        <span style={{ color: conf.fill }}> {likes}</span>
      </div>
      <div
        id="btnDislike"
        className="col-4 text-center"
        style={
          stateDislike
            ? { backgroundColor: "yellow", borderRadius: "25%" }
            : null
        }
        role="button"
        onClick={handleLikesDislikes}
      >
        <ThumbsdownIcon
          verticalAlign="middle"
          size={conf.size}
          fill={conf.fill}
          aria-label="no me gusta"
        />
        <br />
        <span style={{ color: conf.fill }}> {dislikes}</span>
      </div>
      <div className="col-4 text-center">
        <EyeIcon size={conf.size} fill={conf.fill} aria-label="vistas" />
        <br />
        <span style={{ color: conf.fill }}> {item.views}</span>
      </div>
    </div>
  );
}
