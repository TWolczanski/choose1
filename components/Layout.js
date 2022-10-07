import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";
import {useModal} from "../context/ModalContext";

export default function Layout({children}) {
  const {open} = useModal();
  return (
    <div className={`${styles.container} ${open ? styles.modalOpen : ""}`}>
      <Navbar />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}
