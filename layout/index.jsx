import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Script from "next/script";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Next JS Starter Template</title>
        <meta
          name="description"
          content="This is a quickstart template for a Next JS"
        />
        <meta
          name="tags"
          content="Next JS, Tailwind CSS, Global State, Layout, Components, Hooks"
        />
        <link rel="icon" type="image" href="favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
