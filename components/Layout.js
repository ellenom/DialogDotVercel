import Head from 'next/head';
import Header from './Header';
import "../styles/globals.css";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>DialogDot | Education, Explanation</title>
        <meta name="description" content="DialogDot official website" />
        <link rel="icon" href="/assets/DialogDot-favicon.png" />
        <script src="https://cdn.jsdelivr.net/npm/tsparticles@3.0.2/tsparticles.bundle.min.js"></script>
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
}