import React, { useState } from "react";
import Button from "../../components/button/Button";
import style from "./Navbar.module.css";
import Image from "../../components/image/Image";
import { LogoImg } from "../../constants/Images";
import { MenuImg } from "../../constants/Images";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const navbarHandler = () => {
    setNavActive((prevState) => !prevState);
    console.log("working");
  };

  return (
    <nav className={style["navbar-container"]}>
      <NavbarLogo />

      <div
        className={`${style["nav-items__container"]} ${
          !navActive && style["nav-items__active"]
        }`}
      >
        <div className={style["nav-links"]}>
          <ul className={style["nav-list"]}>
            <li className={style["nav-item"]}>
              <a href="#" className={style["nav-link"]}>
                Products
              </a>
            </li>
            <li className={style["nav-item"]}>
              <a href="#" className={style["nav-link"]}>
                Data
              </a>
            </li>
          </ul>

          <NavbarButtons />
        </div>
      </div>

      <MenuButton onNavbarActive={navbarHandler} />
    </nav>
  );
}

export default Navbar;

function NavbarLogo() {
  return (
    <div className={style["navbar--logo__container"]}>
      <Image src={LogoImg} alt="navbar-logo" className={style["navbar-img"]} />
      <p className={style["logo-text"]}>Blockchain</p>
    </div>
  );
}

function NavbarButtons() {
  return (
    <div className={style["nav-btn__container"]}>
      <Button className={style["navbar-btn"]} text="Login" />
      <Button className={style["navbar-btn"]} text="Sign Up" />
    </div>
  );
}

function MenuButton(props) {
  return (
    <Image
      src={MenuImg}
      alt="menu-img"
      className={style["menu-img"]}
      onClick={props.onNavbarActive}
    />
  );
}
