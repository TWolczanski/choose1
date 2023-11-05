"use client";

import Navbar from "components/Navbar";
import Footer from "components/Footer";
import styles from "styles/Layout.module.css";
import {useModal} from "context/ModalContext";
import {useEffect} from "react";
import WebsiteInfo from "components/WebsiteInfo";
import {usePathname} from "next/navigation";

export default function Layout({children, postModal}) {
  const {open, setContent} = useModal();
  const pathname = usePathname();
  const showPostModal = pathname.startsWith("/posts/");

  useEffect(() => {
    setContent(<WebsiteInfo />);
  }, []);

  return (
    <div
      className={`${styles.container} ${
        open || showPostModal ? styles.modalOpen : ""
      }`}
    >
      <Navbar />
      <div className={styles.content}>
        {children}
        {showPostModal && postModal}
      </div>
      <Footer />
    </div>
  );
}
