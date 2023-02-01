import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Pagination.module.css";
import Card from "../Card/Card";

export default function Pagination() {
  const allDogs = useSelector((state) => state.dogs);
  const currentPageGlobal = useSelector((state) => state.currentPage);
  const [currentPage, setCurrentPage] = useState(currentPageGlobal);
  const dogsPerPage = 8;
  const pageNumbers = [];
  const totalPage = Math.ceil(allDogs.length / dogsPerPage); //declaro arreglo vacio
  const paginated = allDogs?.slice(
    (currentPage - 1) * dogsPerPage,
    currentPage * dogsPerPage
  );
  const handlePage = (event) => {
    setCurrentPage(event.target.value);
  };
  for (let i = 1; i <= totalPage; i++) {
    //todos los perros dividido perros por pagina
    pageNumbers.push(i); //pusheo en el arreglo
  }

  return (
    <div>
      <div className={styles.pagination_container}>
        {pageNumbers?.map((number) => (
          <button
            onClick={handlePage}
            className={`${styles.paginated} ${styles.buttonHome}`}
            value={number}
          >
            {number}
          </button>
        ))}
      </div>
      <div className={styles.cardContainer}>
        {paginated?.map((dog, index) => {
          return (
            <Card
              id={dog?.id}
              key={index}
              image={dog?.image}
              name={dog?.name}
              weight_min={dog?.weight_min}
              weight_max={dog?.weight_max}
              life_span={dog?.life_span}
              temperament={
                dog?.createInDB
                  ? dog?.temperament?.map((e) => e.name)
                  : dog?.temperament
              }
            />
          );
        })}
      </div>
    </div>
  );
}
