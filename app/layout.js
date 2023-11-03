import "styles/globals.css";
import {ModalProvider} from "context/ModalContext";
import {UserProvider} from "context/UserContext";
import Layout from "components/Layout";

export const metadata = {
  title: "choose1",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <ModalProvider>
            <Layout>{children}</Layout>
          </ModalProvider>
        </UserProvider>
      </body>
    </html>
  );
}
