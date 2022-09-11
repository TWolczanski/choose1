import styles from "../styles/Points.module.css";
import Image from "next/image";

export default function Points({amount}) {
  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <Image src="/img/point-icon.svg" layout="fill" objectFit="contain" />
      </div>
      <span className={styles.amount}>{amount.toLocaleString("en-US")}</span>
    </div>
  );
}
