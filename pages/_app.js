import "../styles/globals.css";
import Layout from "../components/Layout";
import {ModalProvider} from "../context/ModalContext";

function MyApp({Component, pageProps}) {
  return (
    <ModalProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ModalProvider>
  );
}

export default MyApp;
