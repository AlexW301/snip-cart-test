import "../styles/globals.scss";
import Layout from "../layout";
import { StateContext } from "../context/StateContext";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <StateContext>
        <Component {...pageProps} />
      </StateContext>
    </Layout>
  );
}

export default MyApp;
