import React from "react";
import style from "./Button.module.css";

function Button(props) {
  const classes = `${style.btn} ` + props.className;

  return <button className={classes}>{props.text}</button>;
}

export default Button;
