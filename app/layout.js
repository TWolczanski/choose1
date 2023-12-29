import "styles/globals.css";
import Layout from "components/Layout";
import {UserProvider} from "context/UserContext";
import {ModalProvider} from "context/ModalContext";
import {GoogleOAuthProvider} from "@react-oauth/google";

export const metadata = {
  title: "choose1",
};

export default function RootLayout({children, pageModal}) {
  return (
    <GoogleOAuthProvider clientId={process.env.GOOGLE_OAUTH2_CLIENT_ID}>
      <UserProvider>
        <ModalProvider>
          <Layout pageModal={pageModal}>{children}</Layout>
        </ModalProvider>
      </UserProvider>
    </GoogleOAuthProvider>
  );
}
