"use client";

import {useState} from "react";
import styles from "styles/AuthenticationForm.module.css";
import formStyles from "styles/Form.module.css";
import Button from "components/Button";
import {useUser} from "context/UserContext";
import Link from "next/link";
import {useGoogleLogin} from "@react-oauth/google";
import Loading from "components/Loading";
import {useRouter} from "next/navigation";
import SocialAuthButton from "components/SocialAuthButton";

export default function Page({insideModal = false}) {
  const [errors, setErrors] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {setUser} = useUser();

  const login = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      const response = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: codeResponse.code,
        }),
      });

      if (response.ok) {
        if (insideModal) router.back();
        else router.push("/");
      }
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: event.target.username.value,
        password: event.target.password.value,
      }),
    });

    setLoading(false);

    if (response.ok) {
      if (insideModal) router.back();
      else router.push("/");
    } else {
      const data = await response.json();
      setErrors(data);
    }
  }

  return (
    <div
      className={insideModal ? formStyles.modalContainer : formStyles.container}
    >
      <h1>Sign in</h1>

      <SocialAuthButton provider="Google" onClick={() => login()} />

      <form onSubmit={handleSubmit} className={formStyles.form}>
        <div className={formStyles.field}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" />
        </div>

        <div className={formStyles.field}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>

        {errors && (
          <ul className={formStyles.errors}>
            {Object.entries(errors)
              .flatMap(([_, errors]) => errors)
              .map((error, i) => (
                <li key={i}>
                  <div className={formStyles.bullet}></div>
                  <p className={formStyles.error}>{error}</p>
                </li>
              ))}
          </ul>
        )}

        {loading ? <Loading /> : <Button variant="secondary" text="Sign in" />}
      </form>

      <Link href="/sign-up" replace className={styles.redirection}>
        Don&lsquo;t have an account? Sign up
      </Link>
    </div>
  );
}
