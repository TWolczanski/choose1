import {useEffect} from "react";
import styles from "styles/Modal.module.css";
import Backdrop from "components/Backdrop";

export default function Modal({close, children}) {
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
        className={styles.modal}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </Backdrop>
  );
}
