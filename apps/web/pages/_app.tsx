import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/main.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Super Sixites Adventure</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
