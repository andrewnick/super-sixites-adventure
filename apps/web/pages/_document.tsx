import Document, { Html, Head, Main, NextScript } from "next/document";
import Favicon from "../components/Favicon";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i"
            rel="stylesheet"
          />
          <Favicon />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
