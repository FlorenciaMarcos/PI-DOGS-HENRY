import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.about2}>
        <h2>About</h2>
        <p>
          {" "}
          La idea general de la aplicación es que se puedan ver distintas razas
          de perro junto con información relevante de las mismas utilizando la
          api externa the dog api y a partir de ella poder, entre otras cosas:
          Buscar perros Filtrarlos / Ordenarlos Agregar nuevos perros
        </p>
      </div>
      <></>
      <div className={styles.tecno}>
        Tecnologías utilizadas :<li className={styles.about3}>Javascript</li>
        <li className={styles.about3}>React</li>
        <li className={styles.about3}>Redux</li>
        <li className={styles.about3}>Express</li>
        <li className={styles.about3}>Sequelize-Postgres</li>
        <li className={styles.about3}>Axios</li>
        <li className={styles.about3}>Css</li>
        <li className={styles.about3}>Html5</li>
      </div>
    </div>
  );
}

export default About;
