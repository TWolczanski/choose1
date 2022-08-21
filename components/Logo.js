import styles from "../styles/Logo.module.css";

export default function Logo({variant}) {
  return (
    <div className={styles.container}>
      <div className={styles.symbol}>
        <div className={`${styles.circle} ${variant === "dark" ? styles.circleDark : styles.circleLight}`}></div>
        <div className={`${styles.circle} ${variant === "dark" ? styles.circleDark : styles.circleLight}`}></div>
        <div className={`${styles.circle} ${variant === "dark" ? styles.circleDark : styles.circleLight}`}></div>
        <div className={`${styles.circle} ${variant === "dark" ? styles.circleDark : styles.circleLight}`}></div>
      </div>
      <span className={styles.name}>choose1</span>
    </div>
  );
}

Logo.defaultProps = {
  variant: "dark"
};
