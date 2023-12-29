"use client";

import Navbar from "components/Navbar";
import Footer from "components/Footer";
import styles from "styles/Layout.module.css";
import {useModal} from "context/ModalContext";
import {useEffect} from "react";
import WebsiteInfo from "components/WebsiteInfo";
import {usePathname, useSelectedLayoutSegments} from "next/navigation";
import Modal from "components/Modal";

export default function Layout({children, pageModal}) {
  const {open, content, setContent} = useModal();

  const pathname = usePathname();
  const segments = useSelectedLayoutSegments("pageModal");
  const pageModalOpen =
    (pathname.startsWith("/posts/") && segments[1] === "(.)posts") ||
    (pathname === "/sign-in" && segments[1] === "(.)sign-in") ||
    (pathname === "/sign-up" && segments[1] === "(.)sign-up");

  const modalOpen = open || pageModalOpen;

  // const {setContent} = useModal();

  // useEffect(() => {
  //   setContent(<WebsiteInfo />);
  // }, []);

  return (
    <html lang="en">
      <body className={modalOpen ? styles.modalOpen : ""}>
        <div className={styles.container}>
          <Navbar />
          <div className={styles.content}>{children}</div>
          <Footer />
        </div>

        {open && <Modal close={() => setContent()}>{content}</Modal>}
        {pageModalOpen && pageModal}
      </body>
    </html>
  );
}
