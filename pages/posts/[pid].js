import {server} from "../../config";
import Post from "../../components/Post";
import styles from "../../styles/PostPage.module.css";
import Author from "../../components/Author";
import Comments from "../../components/Comments";
import Paragraph from "../../components/Paragraph";

export default function PostPage({
  id,
  title,
  author,
  description,
  type,
  images,
  results,
  choice,
}) {
  return (
    <div className={styles.container}>
      <Post
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
        <Comments postId={id} />
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

  return {
    props: {
      id: post.id,
      title: post.title,
      author: author,
      description: post.description || null,
      type: post.type,
      images: post.images,
      results: post.results,
      choice: post.choice || null,
    },
  };
}
