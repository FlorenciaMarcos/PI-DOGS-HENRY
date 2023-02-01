import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; //hooks
import { getDogs, getTemperament } from "../../Redux/Action";
import SideBar from "../../components/SideBar/SideBar";
import Pagination from "../../components/Pagination/Pagination";
import FilterTemperaments from "../FilterTemperaments/FilterTemperaments";
import OrderByName from "../OrderByName/OrderByName";
import styles from "./Home.module.css";
import Buttons from "../../components/buttons/Buttons";
import FilterByWeight from "../FilterByWeight/filterByWeight";
import Footer from "../../components/Footer/Footer";

function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);
  // const allTemps = useSelector((state) => state.temperament);

  useEffect(() => {
    dispatch(getTemperament());
    !allDogs?.length && dispatch(getDogs());
  }, []);

  return (
    <section className={styles.fondo}>
      <div className={styles.home}>
        <div className={styles.homes}>
          <FilterTemperaments />
          <OrderByName />
          <FilterByWeight />
          <SideBar />
        </div>
      </div>
      <Pagination />
      <Buttons />
      <Footer />
    </section>
  );
}

export default Home;
