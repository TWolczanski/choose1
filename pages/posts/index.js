import Posts from "../../components/Posts";
import NewPostButton from "../../components/NewPostButton";
import styles from "../../styles/PostsPage.module.css";

export default function PostsPage() {
  return (
    <>
      <h1 className="header">Posts</h1>
      <NewPostButton className={styles.newPostBtn} />
      <Posts />
    </>
  );
}
