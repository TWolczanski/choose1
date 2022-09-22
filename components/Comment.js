import styles from "../styles/Comment.module.css";
import Author from "./Author";
import Paragraph from "./Paragraph";

export default function Comment({author, body, timestamp}) {
  return (
    <article className={styles.comment}>
      <Author
        id={author.id}
        name={author.name}
        avatar={author.avatar}
        className={styles.author}
      />
      <Paragraph text={body} className={styles.body} />
      <span className={styles.timestamp}>
        {new Date(timestamp).toLocaleString("en-GB").replaceAll("/", "-")}
      </span>
    </article>
  );
}
