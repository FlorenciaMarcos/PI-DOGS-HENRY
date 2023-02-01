import styles from "./Footer.module.css";
import github from "../../assests/Img/Icon/github.png";
import logo from "../../assests/Img/Icon/logo.png";

function Footer() {
  return (
    <div className="styles.footer">
      <p>
        <img src={github} alt="" /> © 2023 Florencia Marcos. All rights reserved{" "}
        <img
          src={logo}
          height="15px"
          width="50px"
          className="styles.logoFooter"
        />
      </p>
    </div>
  );
}

export default Footer;
