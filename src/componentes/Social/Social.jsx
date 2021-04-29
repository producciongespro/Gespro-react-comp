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
  const [highlighted, setHighlighted] = useState(null);

  const handleLikesDislikes = (e) => {
    const data = {
      id: item.id,
      value: null,
    };
    //console.log(e.currentTarget.id);
    if (e.currentTarget.id === "btnLike" && enableLike) {
      data.value = "like";
      setLikes(props.item.likes + 1);
      setEnableLike(false); 
      setHighlighted("like");
      props.putLikesDislikes(data);
      //Si previamente fue clickeado un dislike:
      if (!enableDislike) {        
        setDislikes(dislikes - 1);
      }

    }
    if (e.currentTarget.id === "btnDislike" && enableDislike) {
      data.value = "dislike";
      setDislikes(props.item.dislikes + 1);
      setEnableDislike(false);     
      setHighlighted("dislike"); 
      props.putLikesDislikes(data);
        //Si previamente fue clickeado un like:
        if (!enableLike) {                    
            setLikes(likes - 1);
          }

    }
  };

  return (
    <div className="row">
      <div
        id="btnLike"
        className="col-4 text-center"
        style={highlighted === "like" ? { backgroundColor: 'yellow', borderRadius:'25%' } : null}
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
        style={highlighted === "dislike" ? { backgroundColor: 'yellow', borderRadius:'25%' } : null}
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
