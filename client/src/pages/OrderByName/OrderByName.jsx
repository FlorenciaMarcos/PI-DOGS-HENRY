import { useDispatch } from "react-redux";
import * as action from "../../Redux/Action";
import styles from "./OrderByName.module.css";

export default function OrderByName() {
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(action.filterByName(e.target.value));
  };
  return (
    <div>
      <label className={styles.label} htmlFor="">
        Order by:
      </label>
      <select className={styles.option} onChange={handleOrder}>
        <option hidden>Order</option>
        <option value="Asc"> A-Z</option>
        <option value="Desc"> Z-A</option>
      </select>
    </div>
  );
}
