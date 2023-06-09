import {useState} from "react";
import styles from "../styles/AccountForm.module.css";
import Button from "./Button";

export default function SignUpForm({onSubmit}) {
  const [error, setError] = useState();

  async function handleSubmit(event) {
    event.preventDefault();
    setError("Signing up not supported");
  }

  return (
    <form
      onSubmit={handleSubmit}
      onChange={() => setError()}
      className={styles.form}
    >
      <h1>Sign up</h1>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
      </div>
      <div>
        <label htmlFor="confirm">Confirm password</label>
        <input type="password" name="confirm" />
      </div>
      {error ? (
        <span className={styles.error}>{error}</span>
      ) : (
        <Button variant="secondary" text="Sign up" />
      )}
    </form>
  );
}
