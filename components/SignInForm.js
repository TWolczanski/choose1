import {useState} from "react";
import styles from "styles/AccountForm.module.css";
import Button from "components/Button";
import {useUser} from "context/UserContext";

export default function SignInForm({onSubmit}) {
  const [error, setError] = useState();
  const {setUser} = useUser();

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/forms/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: event.target.username.value,
        password: event.target.password.value,
      }),
    });
    const result = await response.json();
    if (result.error) setError(result.error);
    else {
      setUser(result.user);
      if (onSubmit) onSubmit();
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      onChange={() => setError()}
      className={styles.form}
    >
      <h1>Sign in</h1>
      <div className={styles.field}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />
      </div>
      <div className={styles.field}>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
      </div>
      {error ? (
        <span className={styles.error}>{error}</span>
      ) : (
        <Button variant="secondary" text="Sign in" />
      )}
    </form>
  );
}
