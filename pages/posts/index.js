import Posts from "../../components/Posts";
import NewPostButton from "../../components/NewPostButton";
import styles from "../../styles/PostsPage.module.css";
import {useUser} from "../../context/UserContext";

export default function PostsPage() {
  const {user} = useUser();
  return (
    <>
      <h1 className="header">Posts</h1>
      {user && <NewPostButton className={styles.newPostBtn} />}
      <Posts />
    </>
  );
}
