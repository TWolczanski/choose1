"use client";

import Navbar from "components/Navbar";
import Footer from "components/Footer";
import styles from "styles/Layout.module.css";
import {useModal} from "context/ModalContext";
import {useEffect} from "react";
import WebsiteInfo from "components/WebsiteInfo";

export default function Layout({children}) {
  const {open, setContent} = useModal();

  useEffect(() => {
    setContent(<WebsiteInfo />);
  }, []);

  return (
    <div className={`${styles.container} ${open ? styles.modalOpen : ""}`}>
      <Navbar />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}
