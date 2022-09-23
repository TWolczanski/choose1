import Comment from "./Comment";
import styles from "../styles/Comments.module.css";

export default function Comments({comments, className, ...props}) {
  return (
    <ul
      {...props}
      className={`${styles.comments} ${className ? className : ""}`}
    >
      {comments &&
        comments.map((c, i) => (
          <li key={i}>
            <Comment author={c.author} body={c.body} timestamp={c.timestamp} />
          </li>
        ))}
    </ul>
  );
}
