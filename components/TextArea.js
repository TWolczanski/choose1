import {useEffect, useRef} from "react";
import styles from "../styles/TextArea.module.css";

export default function TextArea({empty, className, onInput, ...props}) {
  const ref = useRef(null);
  const height = useRef(null);

  useEffect(() => {
    if (empty) {
      ref.current.value = "";
      ref.current.style.height = height.current;
      ref.current.blur();
    }
  }, [empty]);

  function handleInput(event) {
    if (height.current === null) {
      height.current = ref.current.clientHeight + "px";
    }
    ref.current.style.height = height.current;
    if (ref.current.clientHeight < ref.current.scrollHeight) {
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
    if (onInput) {
      onInput(event);
    }
  }

  return (
    <textarea
      {...props}
      className={`${styles.textarea} ${className ? className : ""}`}
      ref={ref}
      onInput={handleInput}
    ></textarea>
  );
}
