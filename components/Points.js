import styles from "styles/Points.module.css";
import Image from "next/image";

export default function Points({amount, className}) {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.iconWrapper}>
        <Image
          src="/img/point-icon.svg"
          alt="points icon"
          fill={true}
          className={styles.icon}
        />
      </div>
      <span className={styles.amount}>{amount.toLocaleString("en-US")}</span>
    </div>
  );
}
