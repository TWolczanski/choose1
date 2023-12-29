"use client";

import {useState} from "react";
import styles from "styles/AuthenticationForm.module.css";
import formStyles from "styles/Form.module.css";
import Button from "components/Button";
import Link from "next/link";
import Loading from "components/Loading";
import {useRouter} from "next/navigation";
import {useGoogleLogin} from "@react-oauth/google";
import SocialAuthButton from "components/SocialAuthButton";

export default function Page({insideModal = false}) {
  const [errors, setErrors] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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

    const response = await fetch("/api/auth/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: event.target.username.value,
        password1: event.target.password1.value,
        password2: event.target.password2.value,
        email: event.target.email.value,
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
      <h1>Sign up</h1>

      <SocialAuthButton provider="Google" onClick={() => login()} />

      <form onSubmit={handleSubmit} className={formStyles.form}>
        <div className={formStyles.field}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            className={errors?.username ? formStyles.inputError : ""}
          />
        </div>

        <div className={formStyles.field}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            className={errors?.email ? formStyles.inputError : ""}
          />
        </div>

        <div className={formStyles.field}>
          <label htmlFor="password1">Password</label>
          <input
            type="password"
            name="password1"
            id="password1"
            className={errors?.password1 ? formStyles.inputError : ""}
          />
        </div>

        <div className={formStyles.field}>
          <label htmlFor="password2">Confirm password</label>
          <input
            type="password"
            name="password2"
            id="password2"
            className={errors?.password2 ? formStyles.inputError : ""}
          />
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

        {loading ? <Loading /> : <Button variant="secondary" text="Sign up" />}
      </form>

      <Link href="/sign-in" replace className={styles.redirection}>
        Already have an account? Sign in
      </Link>
    </div>
  );
}
