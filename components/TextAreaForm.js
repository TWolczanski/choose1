import {useState} from "react";
import styles from "styles/TextAreaForm.module.css";
import TextArea from "components/TextArea";
import Button from "components/Button";

export default function TextAreaForm({
  name,
  submitText = "Submit",
  onSubmit,
  className,
}) {
  const [focused, setFocused] = useState(false);
  const [btnVisible, setBtnVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setFocused(false);
        setBtnVisible(false);
        setSubmitted(true);
        if (onSubmit) {
          onSubmit(event);
        }
      }}
      className={`${styles.form} ${
        focused ? styles.formFocused : ""
      } ${className}`}
    >
      <TextArea
        value={submitted ? "" : undefined}
        name={name}
        rows={3}
        placeholder="Write a comment..."
        spellCheck={false}
        className={styles.textarea}
        onFocus={() => {
          setFocused(true);
          setSubmitted(false);
        }}
        onBlur={() => setFocused(false)}
        onInput={(event) => {
          if (event.target.value.length > 0) setBtnVisible(true);
          else setBtnVisible(false);
        }}
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
