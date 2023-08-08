import React from "react";
import style from "./Connecting.module.css";
import Button from "../../components/button/Button";

function Connecting() {
  return (
    <div className={style["connecting-container"]}>
      <div className={style["connecting-left__container"]}>
        <h1>Connecting</h1>
        <p>the world to crypto</p>
        <p>The easy way to send, receive, store and trade digital currencies</p>

        <Button text="Get a Free Wallet" className={style["wallet-button"]} />
      </div>
      <div className={style["connecting-right__container"]}></div>
    </div>
  );
}

export default Connecting;
