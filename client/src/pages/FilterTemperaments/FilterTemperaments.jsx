import { useDispatch, useSelector } from "react-redux";
import styles from "./FilterTemperaments.module.css";
import * as action from "../../Redux/Action";

function FilterByTemperaments() {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperament);

  const handleFilter = (e) => {
    dispatch(action.filterByTemperaments(e.target.value));
  };

  // const handleReset=()=>{

  // }

  return (
    <div>
      <label className={styles.label} htmlFor="">
        Temperaments:
      </label>
      <select className={styles.option} onChange={handleFilter}>
        {temperaments?.map((e, index) => (
          <option key={index} value={e.name}>
            {e.name}
          </option>
        ))}
        <option value="temperamentos" hidden>
          Options
        </option>
      </select>
    </div>
  );
}

export default FilterByTemperaments;
