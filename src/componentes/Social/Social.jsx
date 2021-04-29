/*
Referencia de librería octicons: (utilizada para generear iconos)
https://primer.style/octicons/
https://primer.style/octicons/packages/react
*/
import React, { useState } from "react";
import { ThumbsupIcon, ThumbsdownIcon, EyeIcon } from "@primer/octicons-react";
import "./social.css";

export default function Social(props) {
  const conf = props.config;
  const item = props.item;
  const [likes, setLikes] = useState(props.item.likes);
  const [enableLike, setEnableLike] = useState(true);
  const [dislikes, setDislikes] = useState(props.item.dislikes);
  const [enableDislike, setEnableDislike] = useState(true);

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
      props.putLikesDislikes(data);
    }
    if (e.currentTarget.id === "btnDislike" && enableDislike) {
      data.value = "dislike";
      setDislikes(props.item.dislikes + 1);
      setEnableDislike(false);
      props.putLikesDislikes(data);
    }
  };

  return (
    <div className="row">
      <div
        id="btnLike"
        className="col-4 text-center"
        style={!enableLike ? { backgroundColor: 'yellow', borderRadius:'25%' } : null}
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
        className="col-4"
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
      <div className="col-4">
        <EyeIcon size={conf.size} fill={conf.fill} aria-label="vistas" />
        <br />
        <span style={{ color: conf.fill }}> {item.views}</span>
      </div>
    </div>
  );
}
