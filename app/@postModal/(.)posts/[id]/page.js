import styles from "styles/PostPage.module.css";
import PageModal from "components/PageModal";
import PostPage from "app/posts/[id]/page";

export default function Page({params}) {
  return (
    <PageModal className={styles.modal}>
      <PostPage params={params} insideModal />
    </PageModal>
  );
}
