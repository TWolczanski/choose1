import styles from "../styles/Backdrop.module.css";

export default function Backdrop({children, onClick}) {
  return (
    <div className={styles.backdrop} onClick={onClick}>
      {children}
    </div>
  );
}
