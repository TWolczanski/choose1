import styles from "../styles/Button.module.css";

export default function Button({variant, text, onClick}) {
  return (
    <button className={`${styles.btn} ${styles[variant]}`} onClick={onClick}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  variant: "light",
};
