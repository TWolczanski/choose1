import styles from "../styles/Loading.module.css";

export default function Loading({className, ...props}) {
  return (
    <div {...props} className={`${styles.loading} ${className || ""}`}>
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className={`${styles.circle}`}></div>
      ))}
    </div>
  );
}
