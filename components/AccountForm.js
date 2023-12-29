import {useState} from "react";
import styles from "styles/AccountForm.module.css";
import SignInForm from "components/SignInForm";
import SignUpForm from "components/SignUpForm";
import Button from "components/Button";
import {useGoogleLogin} from "@react-oauth/google";

export default function AccountForm({register, onSubmit, className}) {
  const [registration, setRegistration] = useState(register);

  const login = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      console.log(codeResponse);
      const response = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: codeResponse.code,
        }),
      });
      console.log(response);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <div className={`${styles.modalContainer} ${className ?? ""}`}>
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
          <Button text="Sign in with Google" onClick={() => login()} />
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
