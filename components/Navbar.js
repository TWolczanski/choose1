import Link from "next/link";
import Logo from "./Logo";
import Nav from "./Nav";
import Button from "./Button";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <Link href="/">
        <a className={styles.logo}>
          <Logo variant="dark" />
        </a>
      </Link>
      <Nav className={styles.nav} />
      <div className={styles.buttons}>
        <Button variant="light" text="Sign in"></Button>
        <Button variant="primary" text="Sign up"></Button>
      </div>
    </header>
  );
}
