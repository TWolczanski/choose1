import PageModal from "components/PageModal";
import styles from "styles/Form.module.css";
import SignInPage from "app/sign-in/page";

export default function Page() {
  return (
    <PageModal className={styles.modal}>
      <SignInPage insideModal />
    </PageModal>
  );
}
