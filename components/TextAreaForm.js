import {useState} from "react";
import styles from "../styles/TextAreaForm.module.css";
import TextArea from "./TextArea";
import Button from "./Button";

export default function TextAreaForm({name, submitText, onSubmit, className}) {
  const [empty, setEmpty] = useState(true);
  const [focused, setFocused] = useState(false);
  const [btnVisible, setBtnVisible] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setEmpty(true);
        setFocused(false);
        setBtnVisible(false);
        if (onSubmit) {
          onSubmit(event);
        }
      }}
      className={`${styles.form} ${
        focused ? styles.formFocused : ""
      } ${className}`}
    >
      <TextArea
        name={name}
        rows={3}
        placeholder="Write a comment..."
        spellCheck={false}
        className={styles.textarea}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onInput={(event) => {
          if (event.target.value.length > 0) {
            if (empty) {
              setEmpty(false);
            }
            setBtnVisible(true);
          } else {
            setBtnVisible(false);
          }
        }}
        empty={empty}
      />
      {focused && (
        <Button
          variant="secondary"
          text={submitText}
          className={btnVisible ? styles.visible : styles.hidden}
          onMouseDown={(event) => event.preventDefault()}
        />
      )}
    </form>
  );
}

TextAreaForm.defaultProps = {
  submitText: "Submit",
};
