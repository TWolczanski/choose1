import {server} from "config";
import Post from "components/Post";
import styles from "styles/PostPage.module.css";
import Author from "components/Author";
import Comments from "components/Comments";
import Paragraph from "components/Paragraph";
import {notFound} from "next/navigation";
import PageModal from "components/PageModal";

async function getPost(id) {
  const res = await fetch(`${server}/data/posts.json`, {cache: "no-store"});
  const posts = await res.json();
  const post = posts && posts.find((p) => p.id === parseInt(id));
  if (!post) notFound();
  return post;
}

async function getAuthor(post) {
  const res = await fetch(`${server}/data/users.json`, {cache: "no-store"});
  const users = await res.json();
  return users.find((u) => u.id === post.authorId);
}

export default async function Page({params}) {
  const post = await getPost(params.id);
  const author = await getAuthor(post);
  return (
    <PageModal className={styles.modal}>
      <Post
        type={post.type}
        images={post.images}
        results={post.results}
        choice={post.choice}
        className={styles.top}
      />
      <div className={styles.bottom}>
        <div className={styles.info}>
          <h2>{post.title}</h2>
          <Author id={author.id} name={author.name} avatar={author.avatar} />
          {post.description && <Paragraph text={post.description} />}
        </div>
        <Comments postId={post.id} />
      </div>
    </PageModal>
  );
}
