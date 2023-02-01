import { useDispatch } from "react-redux";
import * as action from "../../Redux/Action";
import styles from "./filterByWeight.module.css";

export default function FilterByWeight() {
  const dispatch = useDispatch();

  const handleWeights = (e) => {
    dispatch(action.filterByWeight(e.target.value));
  };

  return (
    <div>
      <label className={styles.label} htmlFor="">
        Order by Weight:
      </label>

      <select className={styles.option} onChange={handleWeights}>
        <option hidden>Order</option>
        <option value="orderLIGHT">Order by lightest</option>
        <option value="orderHEAVY">Order by heaviest</option>
      </select>
    </div>
  );
}
