import "../styles/globals.css";
import Layout from "../components/Layout";
import {ModalProvider} from "../context/ModalContext";
import {UserProvider} from "../context/UserContext";

function MyApp({Component, pageProps}) {
  return (
    <UserProvider>
      <ModalProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ModalProvider>
    </UserProvider>
  );
}

export default MyApp;
