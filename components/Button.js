import styles from "styles/Button.module.css";

export default function Button({variant = "light", text, className, ...props}) {
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
