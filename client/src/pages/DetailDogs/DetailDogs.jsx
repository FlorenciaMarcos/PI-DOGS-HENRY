import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetails } from "../../Redux/Action";
import styles from "./DetailDogs.module.css";
import pata from "../../assests/Img/Icon/pata.png";
import Loader from "../../components/Loader/Loader";

export default function DetailDogs() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { push } = useHistory();
  const backToHome = () => {
    push("/home");
  };
  const detail = useSelector((state) => state.detail);
  useEffect(() => {
    dispatch(getDetails(id));
  }, []);

  console.log(detail.image);
  return (
    <div className={styles.detailDog2}>
      <div className={styles.detailDog}>
        <div className={styles.button_detail}></div>

        <button className={styles.active} onClick={backToHome}>
          <img src={pata} alt="" />
          Breeds
          <img src={pata} alt="" />
        </button>

        {detail ? (
          <div className={styles.names}>
            <h2 className={styles.dognamedetail}>
              <img src={pata} alt="" /> {detail?.name} <img src={pata} alt="" />
            </h2>
            <img
              className={styles.imageDetail}
              src={detail.image?.url}
              alt="not found"
            />
            <h3>
              Height :{" "}
              {detail?.createdInDb ? detail?.height : detail.height?.imperial}
            </h3>
            <h3>
              Weight :{" "}
              {detail?.createdInDb ? detail.weight : detail.weight?.imperial}
            </h3>
            <h3>Life_Span : {detail?.life_span}</h3>
            <h3>
              Temperament :{" "}
              {detail?.createdInDb
                ? detail?.temperament + " "
                : detail.temperament}
            </h3>
          </div>
        ) : (
          <div>
            <p>Loading...</p>
            {<img src={Loader} alt="Loader"></img>}
          </div>
        )}
      </div>
    </div>
  );
}
