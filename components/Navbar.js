import Link from "next/link";
import Logo from "./Logo";
import Nav from "./Nav";
import Button from "./Button";
import styles from "../styles/Navbar.module.css";
import AccountForm from "./AccountForm";
import {useModal} from "../context/ModalContext";

export default function Navbar() {
  const {setContent} = useModal();
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
          onClick={() => setContent(<AccountForm register={false} />)}
        ></Button>
        <Button
          variant="primary"
          text="Sign up"
          onClick={() => setContent(<AccountForm register={true} />)}
        ></Button>
      </div>
    </header>
  );
}
