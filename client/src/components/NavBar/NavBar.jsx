import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import React from "react";
import pata1 from "../../assests/Img/Icon/pata1.png";

function NavBar() {
  return (
    <div className={styles.navbarr}>
      <div className={styles.navbar}>
        <div></div>
        <NavLink
          className={styles.active}
          style={{ textDecoration: "none" }}
          to="/home"
        >
          <p>
            Home <img src={pata1} alt="" />
          </p>{" "}
        </NavLink>
        <NavLink
          className={styles.active}
          style={{ textDecoration: "none" }}
          to="/create"
        >
          <p>
            Create New <img src={pata1} alt="" />
          </p>{" "}
        </NavLink>
        <NavLink
          className={styles.active}
          style={{ textDecoration: "none" }}
          to="/about"
        >
          <p>About</p>{" "}
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
