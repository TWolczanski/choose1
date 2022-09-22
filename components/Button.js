import styles from "../styles/Button.module.css";

export default function Button({variant, text, className, ...props}) {
  return (
    <button
      {...props}
      className={`${styles.btn} ${styles[variant]} ${
        className ? className : ""
      }`}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  variant: "light",
};
