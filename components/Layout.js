import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";
import {useModal} from "../context/ModalContext";
import {useEffect} from "react";
import WebsiteInfo from "./WebsiteInfo";
import Head from "next/head";

export default function Layout({children}) {
  const {open, setContent} = useModal();

  useEffect(() => {
    setContent(<WebsiteInfo />);
  }, []);

  return (
    <div className={`${styles.container} ${open ? styles.modalOpen : ""}`}>
      <Head>
        <title>choose1</title>
        <link rel="icon" href="/img/favicon.png" />
      </Head>
      <Navbar />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}
