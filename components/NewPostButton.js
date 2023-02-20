import styles from "../styles/NewPostButton.module.css";
import {useModal} from "../context/ModalContext";
import NewPostForm from "./NewPostForm";

export default function NewPostButton({className, ...props}) {
  const {setContent} = useModal();
  return (
    <button
      {...props}
      className={`${styles.newPostBtn} ${className ? className : ""}`}
      onClick={() => setContent(<NewPostForm />)}
    >
      <div className={styles.plus}>+</div>
      <div className={styles.text}>New post</div>
    </button>
  );
}
