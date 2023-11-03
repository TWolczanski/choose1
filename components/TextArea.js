import {useEffect, useRef} from "react";
import styles from "styles/TextArea.module.css";

export default function TextArea({value, onInput, className, ...props}) {
  const ref = useRef(null);

  function adjustHeight() {
    ref.current.style.height = null;
    if (ref.current.clientHeight < ref.current.scrollHeight) {
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
  }

  function handleInput(event) {
    adjustHeight();
    if (onInput) {
      onInput(event);
    }
  }

  useEffect(() => {
    if (value !== null && value !== undefined) {
      ref.current.blur();
      ref.current.value = value;
      adjustHeight();
    }
  }, [value]);

  return (
    <textarea
      {...props}
      className={`${styles.textarea} ${className ? className : ""}`}
      ref={ref}
      onInput={handleInput}
    ></textarea>
  );
}
