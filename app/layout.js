import "styles/globals.css";
import Layout from "components/Layout";
import {UserProvider} from "context/UserContext";
import {ModalProvider} from "context/ModalContext";

export const metadata = {
  title: "choose1",
};

export default function RootLayout({children, postModal}) {
  return (
    <UserProvider>
      <ModalProvider>
        <Layout postModal={postModal}>{children}</Layout>
      </ModalProvider>
    </UserProvider>
  );
}
