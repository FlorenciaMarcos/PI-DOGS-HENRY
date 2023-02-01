import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Perro from "../../assests/Img/Image/Perro.jpg";
import styles from "./notFound.module.css";

function NotFound() {
  const [show, setShow] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClose = () => {
    setShow(false);
    history.push("/home");
  };

  return (
    <div className={`not-found-modal ${show ? "show" : ""}`}>
      <div className={styles.imageNotFound}>
        <img src={Perro} className={styles.image} alt="" />
        <h2>404 Error</h2>
      </div>
      <div className="not-found-body">
        <p>Sorry, the dogsPage you are looking for could not be found.</p>
      </div>
      <div className="not-found-footer">
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}

export default NotFound;
