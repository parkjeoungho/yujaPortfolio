import { Head, Html, Main, NextScript } from "next/document";
import { prefix } from "../feature/content";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@500;600;700;800;900&family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&family=PT+Sans+Narrow:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
