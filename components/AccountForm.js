import {useState} from "react";
import styles from "../styles/AccountForm.module.css";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export default function AccountForm({register, onSubmit}) {
  const [registration, setRegistration] = useState(register);
  return (
    <div className={styles.container}>
      {registration ? (
        <>
          <SignUpForm onSubmit={onSubmit} />
          <span
            className={styles.redirection}
            onClick={() => setRegistration(false)}
          >
            Already have an account? Sign in
          </span>
        </>
      ) : (
        <>
          <SignInForm onSubmit={onSubmit} />
          <span
            className={styles.redirection}
            onClick={() => setRegistration(true)}
          >
            Don&lsquo;t have an account? Sign up
          </span>
        </>
      )}
    </div>
  );
}
