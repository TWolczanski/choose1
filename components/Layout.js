"use client";

import Navbar from "components/Navbar";
import Footer from "components/Footer";
import styles from "styles/Layout.module.css";
import {useModal} from "context/ModalContext";
import {useEffect} from "react";
import WebsiteInfo from "components/WebsiteInfo";
import {usePathname, useSelectedLayoutSegments} from "next/navigation";

export default function Layout({children, postModal}) {
  const {open} = useModal();

  const pathname = usePathname();
  const segments = useSelectedLayoutSegments("postModal");
  const showPostModal =
    pathname.startsWith("/posts/") && segments[1] === "(.)posts";

  // const {setContent} = useModal();

  // useEffect(() => {
  //   setContent(<WebsiteInfo />);
  // }, []);

  return (
    <>
      <div
        className={`${styles.container} ${
          open || showPostModal ? styles.modalOpen : ""
        }`}
      >
        <Navbar />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
      {showPostModal && postModal}
    </>
  );
}
