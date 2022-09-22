import {server} from "../../config";
import Post from "../../components/Post";
import styles from "../../styles/PostPage.module.css";
import Author from "../../components/Author";
import Comments from "../../components/Comments";
import TextAreaForm from "../../components/TextAreaForm";
import Paragraph from "../../components/Paragraph";
import {useState} from "react";

export default function PostPage({
  id,
  title,
  author,
  description,
  type,
  images,
  results,
  choice,
  comments,
  user,
}) {
  const [feedback, setFeedback] = useState(comments);

  return (
    <div className={styles.container}>
      <Post
        id={id}
        type={type}
        images={images}
        results={results}
        choice={choice}
        className={styles.top}
      />
      <div className={styles.bottom}>
        <div className={styles.info}>
          <h2>{title}</h2>
          <Author id={author.id} name={author.name} avatar={author.avatar} />
          {description && <Paragraph text={description} />}
        </div>
        <div className={styles.feedback}>
          {user && (
            <TextAreaForm
              name="comment"
              onSubmit={(event) => {
                const body = event.target.comment.value;
                const author = user;
                const timestamp = new Date().toISOString();
                const comment = {author, body, timestamp};
                setFeedback([comment, ...(feedback || [])]);
              }}
              className={styles.commentForm}
            />
          )}
          {feedback ? (
            <Comments comments={feedback} />
          ) : (
            <p className={styles.noComments}>
              Looks like there are no comments yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const pid = parseInt(context.params.pid);
  const pres = await fetch(`${server}/data/posts.json`);
  const posts = await pres.json();
  const post = posts.find((p) => p.id === pid);
  if (!post) {
    return {
      notFound: true,
    };
  }
  const ures = await fetch(`${server}/data/users.json`);
  const users = await ures.json();

  const author = users.find((u) => u.id === post.authorId);
  const comments =
    post.comments &&
    post.comments.map((c) => ({
      author: users.find((u) => u.id === c.authorId),
      body: c.body,
      timestamp: c.timestamp,
    }));

  return {
    props: {
      title: post.title,
      author: author,
      description: post.description || null,
      type: post.type,
      images: post.images,
      results: post.results,
      choice: post.choice || null,
      comments: comments || null,
      user: users[3],
    },
  };
}
