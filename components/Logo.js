import styles from "styles/Logo.module.css";

export default function Logo({variant = "dark", className}) {
  return (
    <div className={`${styles.logo} ${className}`}>
      <div className={styles.symbol}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`${styles.circle} ${styles[variant]}`}></div>
        ))}
      </div>
      <span className={`${styles.typography} ${styles[variant + "Text"]}`}>
        choose1
      </span>
    </div>
  );
}
