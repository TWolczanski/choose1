import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

export default function Layout({children}) {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}
