import { Link } from "react-router-dom";
import Animal from "../../assests/Img/Video/Animal-.mp4";
import styles from "./Landing.module.css";

function Landing() {
  return (
    <div>
      <main className={styles.hero}>
        <div className={styles.promo}>
          <Link to="/home">
            <button className={styles.bton}>
              {" "}
              <span className={styles.text}>START</span>
              <span className={styles.blob}></span>
              <span className={styles.blob}></span>
              <span className={styles.blob}></span>
              <span className={styles.blob}></span>
            </button>
          </Link>
        </div>
        <video className={styles.video} muted autoPlay loop>
          <source src={Animal} type="" />
        </video>
        <div className={styles.capa}> </div>
      </main>
    </div>
  );
}

export default Landing;
