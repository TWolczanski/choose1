import styles from "../styles/Button.module.css";

export default function Button({variant, text, onClick, className}) {
  return (
    <button
      className={`${styles.btn} ${styles[variant]} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  variant: "light",
};
