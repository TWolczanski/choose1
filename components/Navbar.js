import Link from "next/link";
import Logo from "./Logo";
import Nav from "./Nav";
import Button from "./Button";
import styles from "../styles/Navbar.module.css";
import {useModal} from "../context/ModalContext";

export default function Navbar() {
  const {setSignInOpen, setSignUpOpen} = useModal();
  return (
    <header className={styles.navbar}>
      <Link href="/">
        <a className={styles.logo}>
          <Logo variant="dark" />
        </a>
      </Link>
      <Nav className={styles.nav} />
      <div className={styles.buttons}>
        <Button
          variant="light"
          text="Sign in"
          onClick={() => setSignInOpen(true)}
        ></Button>
        <Button
          variant="primary"
          text="Sign up"
          onClick={() => setSignUpOpen(true)}
        ></Button>
      </div>
    </header>
  );
}
