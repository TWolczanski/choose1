"use client";

import Comment from "components/Comment";
import TextAreaForm from "components/TextAreaForm";
import styles from "styles/Comments.module.css";
import {useEffect, useState} from "react";
import {useUser} from "context/UserContext";

export default function Comments({postId, authorId, className, ...props}) {
  const [comments, setComments] = useState();
  const {user} = useUser();

  useEffect(() => {
    const fetchComments = async () => {
      const pres = await fetch("/data/posts.json");
      const posts = await pres.json();
      const ures = await fetch("/data/users.json");
      const users = await ures.json();

      if (postId) {
        const post = posts.find((p) => p.id === postId);
        const postComments = (post.comments || []).map((c) => ({
          author: users.find((u) => u.id === c.authorId),
          body: c.body,
          timestamp: c.timestamp,
        }));
        setComments(postComments);
      } else if (authorId) {
        const userComments =
          posts &&
          posts
            .map((p) =>
              (p.comments || [])
                .filter((c) => c.authorId === authorId)
                .map((c) => ({source: p, body: c.body, timestamp: c.timestamp}))
            )
            .flat();
        setComments(userComments);
      }
    };
    fetchComments();
  }, [postId, authorId]);

  function handleAddComment(event) {
    const body = event.target.comment.value;
    const author = user;
    const timestamp = new Date().toISOString();
    const comment = {author, body, timestamp};
    setComments([comment, ...(comments || [])]);
  }

  return (
    <div
      {...props}
      className={`${styles.container} ${className ? className : ""}`}
    >
      {user && postId && (
        <TextAreaForm
          name="comment"
          onSubmit={handleAddComment}
          className={styles.commentForm}
        />
      )}
      {comments &&
        (comments.length > 0 ? (
          <ul className={styles.comments}>
            {comments.map((c, i) => (
              <li key={i}>
                <Comment
                  author={c.author}
                  source={c.source}
                  body={c.body}
                  timestamp={c.timestamp}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.info}>
            It looks like there are no comments yet.
          </p>
        ))}
    </div>
  );
}
