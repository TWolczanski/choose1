import styles from "../styles/Logo.module.css";

export default function Logo({variant, className}) {
  return (
    <div className={`${styles.logo} ${className}`}>
      <div className={styles.symbol}>
        {[...Array(4)].map((a, i) => (
          <div key={i} className={`${styles.circle} ${styles[variant]}`}></div>
        ))}
      </div>
      <span className={`${styles.typography} ${styles[variant + "Text"]}`}>
        choose1
      </span>
    </div>
  );
}

Logo.defaultProps = {
  variant: "dark",
};
