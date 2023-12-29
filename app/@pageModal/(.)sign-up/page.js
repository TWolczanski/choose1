import PageModal from "components/PageModal";
import styles from "styles/Form.module.css";
import SignUpPage from "app/sign-up/page";

export default function Page() {
  return (
    <PageModal className={styles.modal}>
      <SignUpPage insideModal />
    </PageModal>
  );
}
