import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createDog, getTemperament } from "../../Redux/Action";
import { validate } from "../../components/validation/validation";
import styles from "./Form.module.css";
import pata from "../../assests/Img/Icon/pata.png";
import pata1 from "../../assests/Img/Icon/pata1.png";

function Form() {
  const dispatch = useDispatch();
  const { push } = useHistory(); //se usa para redirigir a alguna ruta //v de react reemplaza a useHistory
  const temperament = useSelector((state) => state.temperament); //me traigo el estado de temperament
  const [errors, setErrors] = useState({});
  //para el formulario
  const [input, setInput] = useState({
    name: "",
    image: "",
    height_min: "",
    height_max: "",
    weight_min: "",
    weight_max: "",
    lmin: "",
    lmax: "",
    life_span: "",
    temperament: [],
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value, //name seria nombre, imagen, peso, etc; y value el valor de cada uno
    });
    setErrors(
      validate({
        //seteo mi estado local errors
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(input);
  }
  function handleSelectTemperament(e) {
    setInput({
      ...input,
      temperament: [...input.temperament, e.target.value], //lo que ya había mas lo nuevo
    });
  }

  function handleSubmit(e) {
    //FORM
    e.preventDefault();
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    if (
      !Object.keys(errors).length &&
      input.name &&
      input.image &&
      input.height_min &&
      input.height_max &&
      input.weight_min &&
      input.weight_max &&
      input.lmin &&
      input.lmax &&
      input.temperament
    ) {
      input.height_max += " cm";
      input.weight_max += " kgs";
      input.life_span = input.lmin + " - " + input.lmax + " years";
      dispatch(createDog(input));
      alert("Dog created 🐶");
      setInput({
        name: "",
        image: "",
        height_min: "",
        height_max: "",
        weight_min: "",
        weight_max: "",
        lmin: "",
        lmax: "",
        life_span: "",
        temperament: [],
      });
    } else {
      alert("ERROR: Dog not created 😕");
      return;
    }
    push("/home"); //cdo termine de crear el dog, q me redirija al home
  }

  function handleDelete(el) {
    setInput({
      ...input, //me traigo el anterior para no pisarlo
      temperament: input.temperament.filter((temp) => temp !== el),
    });
  }

  //va cambiando con los inputs ingresados
  //para renderizar los temperamentos
  useEffect(() => {
    dispatch(getTemperament());
  }, [dispatch]);

  return (
    <div className={styles.fondo}>
      <div className={styles.fondo_2}>
        <h1 className={`${styles.tittle} ${styles.h1}`}>
          {" "}
          <img src={pata} alt="" />
          Use your imagination
          <img src={pata} alt="" />
        </h1>
        <Link as={Link} to="/home">
          <button className={styles.buttonHome}>
            {" "}
            Home <img src={pata1} alt="" />
          </button>
        </Link>
        <nav>
          <div className={styles.container}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div>
                <input
                  className={styles.input}
                  placeholder="Dog Name"
                  type="text"
                  value={input.name}
                  name="name"
                  onChange={(e) => handleChange(e)}
                />
                {errors.name && <p className={styles.error}>{errors.name}</p>}
              </div>

              <div>
                <input
                  className={styles.input}
                  placeholder="Image"
                  type="img"
                  value={input.image}
                  name="image"
                  alt="not found"
                  onChange={(e) => handleChange(e)}
                />
                {errors.image && <p className={styles.error}>{errors.image}</p>}
              </div>
              <div>
                <input
                  className={styles.input}
                  placeholder="height_min"
                  type="number"
                  value={input.height_min}
                  name="height_min"
                  onChange={(e) => handleChange(e)}
                />
                {errors.heightMin && (
                  <p className={styles.error}>{errors.heightMin}</p>
                )}
              </div>
              <div>
                <input
                  className={styles.input}
                  placeholder="height_max"
                  type="number"
                  value={input.height_max}
                  name="height_max"
                  onChange={(e) => handleChange(e)}
                />
                {errors.height_max && (
                  <p className={styles.error}>{errors.heightMax}</p>
                )}
              </div>
              <div>
                <input
                  className={styles.input}
                  placeholder="weight_min"
                  type="number"
                  value={input.weight_min}
                  name="weight_min"
                  onChange={(e) => handleChange(e)}
                />
                {errors.weightMin && (
                  <p className={styles.error}>{errors.weightMin}</p>
                )}
              </div>
              <div>
                <input
                  className={styles.input}
                  placeholder="weight_max"
                  type="number"
                  value={input.weight_max}
                  name="weight_max"
                  onChange={(e) => handleChange(e)}
                />
                {errors.weightMax && (
                  <p className={styles.error}>{errors.weightMax}</p>
                )}
              </div>
              <div>
                <input
                  className={styles.input}
                  placeholder="Min life years"
                  type="number"
                  value={input.lmin}
                  name="lmin"
                  onChange={(e) => handleChange(e)}
                />
                {errors.lmin && <p className={styles.error}>{errors.lmin}</p>}
              </div>
              <div>
                <input
                  className={styles.input}
                  placeholder="Max life years"
                  type="number"
                  value={input.lmax}
                  name="lmax"
                  onChange={(e) => handleChange(e)}
                />
                {errors.lmax && <p className={styles.error}>{errors.lmax}</p>}
              </div>
              <div className={styles.temperament_finder}>
                <label className={styles.temperaments}> Temperaments </label>
                <select
                  className={styles.tempe}
                  onChange={(e) => handleSelectTemperament(e)}
                >
                  {errors.temperament && (
                    <p className={styles.error}>{errors.temperament}</p>
                  )}
                  {temperament.map((t) => (
                    <option className={styles.tempe} key={t.id} value={t.name}>
                      {t.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <button className={styles.create} type="submit">
                  Create <img src={pata} alt="" />
                </button>
              </div>
              {input.temperament.map((el) => (
                <ul className={styles.input_temperament} key={el}>
                  <li>
                    <p>{el}</p>
                    <button
                      className={styles.create}
                      onClick={() => handleDelete(el)}
                    >
                      Delete
                    </button>
                  </li>
                </ul>
              ))}
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Form;
