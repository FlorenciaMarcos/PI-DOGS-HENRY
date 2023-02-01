import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import pata from "../../assests/Img/Icon/pata1.png";

export default function Card({
  image,
  name,
  temperament,
  weight_min,
  weight_max,
  life_span,
  id,
}) {
  return (
    <div className={styles.card1}>
      <div className={styles.card}>
        <Link to={`detail/${id}`} className={styles.card}>
          <h2 className={styles.info}>
            <img src={pata} alt="" />
            {name} <img src={pata} alt="" />
          </h2>
          <h3 className={styles.info}>{temperament}</h3>
          <img src={image} alt={`${name}`} className={styles.imageDog} />
          {name !== "Sorry, looks like we don´t have that dog breed" ? (
            <h3 className={styles.info}>
              Weight: {weight_min}-{weight_max} kg
            </h3>
          ) : (
            <></>
          )}
          <h3 className={styles.info}>{life_span}</h3>
        </Link>
      </div>
    </div>
  );
}
