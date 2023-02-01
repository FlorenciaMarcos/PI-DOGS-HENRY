import styles from "./Loader.module.css";

export default function Loader({ setLoading }) {
  return (
    <div className={styles.loader}>
      {setTimeout(() => {
        setLoading(false);
      }, 2000)}
      <span>LOADING...</span>
    </div>
  );
}
