import styles from "../styles/Avatar.module.css";
import Image from "next/image";

export default function Avatar({img, size, className, ...props}) {
  return (
    <div
      {...props}
      className={`${styles.wrapper} ${styles[size]} ${
        className ? className : ""
      }`}
    >
      <Image src={img} alt="user's avatar" layout="fill" objectFit="cover" />
    </div>
  );
}
