import {useState} from "react";
import styles from "../styles/AccountForm.module.css";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export default function AccountForm({register}) {
  const [registration, setRegistration] = useState(register);
  return (
    <div className={styles.container}>
      {registration ? (
        <>
          <SignUpForm />
          <span
            className={styles.redirection}
            onClick={() => setRegistration(false)}
          >
            Already have an account? Sign in
          </span>
        </>
      ) : (
        <>
          <SignInForm />
          <span
            className={styles.redirection}
            onClick={() => setRegistration(true)}
          >
            Don't have an account? Sign up
          </span>
        </>
      )}
    </div>
  );
}
