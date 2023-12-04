"use client";

import Navbar from "components/Navbar";
import Footer from "components/Footer";
import styles from "styles/Layout.module.css";
import {useModal} from "context/ModalContext";
import {useEffect} from "react";
import WebsiteInfo from "components/WebsiteInfo";
import {usePathname, useSelectedLayoutSegments} from "next/navigation";
import Modal from "./Modal";

export default function Layout({children, postModal}) {
  const {open, content, setContent} = useModal();

  const pathname = usePathname();
  const segments = useSelectedLayoutSegments("postModal");
  const postModalOpen =
    pathname.startsWith("/posts/") && segments[1] === "(.)posts";

  const modalOpen = open || postModalOpen;

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

        {postModalOpen && postModal}
      </body>
    </html>
  );
}
