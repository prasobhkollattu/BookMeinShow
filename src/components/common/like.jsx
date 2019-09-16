import React from "react";

const Like = props => {
  let classes = "far fa-heart";
  if (props.liked) classes = "fas fa-heart";
  return <i onClick={props.onClick} className={classes}></i>;
};

export default Like;
