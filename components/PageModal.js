"use client";

import {useEffect} from "react";
import styles from "styles/PageModal.module.css";
import Backdrop from "components/Backdrop";
import {useRouter} from "next/navigation";

export default function PageModal({children, className}) {
  const router = useRouter();

  function close() {
    router.back();
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Backdrop onClick={close}>
      <div
        className={`${styles.modal} ${className ?? ""}`}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </Backdrop>
  );
}
