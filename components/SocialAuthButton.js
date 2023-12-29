import styles from "styles/SocialAuthButton.module.css";
import btnStyles from "styles/Button.module.css";

export default function SocialAuthButton({provider, className, ...props}) {
  return (
    <button
      className={`${btnStyles.btn} ${btnStyles.light} ${
        className ?? ""
      }`}
      {...props}
    >
      <div className={styles.btnContent}>
        <img src={`/img/auth-providers/${provider}.svg`} />
        <span>Continue with {provider}</span>
      </div>
    </button>
  );
}
