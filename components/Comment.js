import styles from "styles/Comment.module.css";
import Author from "components/Author";
import Paragraph from "components/Paragraph";
import Link from "next/link";

export default function Comment({author, source, body, timestamp}) {
  return (
    <article className={styles.comment}>
      {author ? (
        <Author
          id={author.id}
          name={author.name}
          avatar={author.avatar}
          className={styles.author}
        />
      ) : (
        <Link href={`/posts/${source.id}`} className={styles.source}>
          {source.title}
        </Link>
      )}
      <Paragraph text={body} className={styles.body} />
      <span className={styles.timestamp}>
        {new Date(timestamp).toLocaleString("en-GB").replaceAll("/", "-")}
      </span>
    </article>
  );
}
