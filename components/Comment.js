import styles from "../styles/Comment.module.css";
import Author from "./Author";

export default function Comment({author, body, timestamp}) {
  return (
    <article className={styles.comment}>
      <Author
        id={author.id}
        name={author.name}
        avatar={author.avatar}
        className={styles.author}
      />
      <p className={styles.body}>{body}</p>
      <span className={styles.timestamp}>
        {new Date(timestamp).toLocaleString("en-GB")}
      </span>
    </article>
  );
}
