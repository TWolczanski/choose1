import {useEffect} from "react";
import styles from "../styles/Modal.module.css";
import Backdrop from "./Backdrop";

export default function Modal({open, close, children}) {
  useEffect(() => {
    if (open) {
      document.addEventListener(
        "keydown",
        (event) => {
          if (event.key === "Escape" && close) {
            close();
          }
        },
        {once: true}
      );
    }
  }, [open]);

  return (
    <>
      {open && (
        <Backdrop onClick={close}>
          <div
            className={styles.modal}
            onClick={(event) => event.stopPropagation()}
          >
            {children}
          </div>
        </Backdrop>
      )}
    </>
  );
}
