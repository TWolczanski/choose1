import styles from "styles/Footer.module.css";
import Logo from "components/Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <Logo variant="light" />
      </Link>
      <span className={styles.copyright}>&copy; 2022 Tomasz Wołczański</span>
    </footer>
  );
}
