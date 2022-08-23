import Link from "next/link";
import Logo from "./Logo";
import Nav from "./Nav";
import Button from "./Button";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.container}`}>
        <Link href="/"><a><Logo variant="dark" /></a></Link>
        <Nav />
        <div className={styles.buttons}>
          <Button variant="light" text="Sign in"></Button>
          <Button variant="primary" text="Sign up"></Button>
        </div>
      </div>
    </header>
  );
}
