import { AppProps } from "next/app";
import { PropsWithChildren } from "react";
import { useRouter } from "next/router";
import { some } from "lodash";
import { observer } from "mobx-react-lite";
import LayoutView from "./view/layout";
import AnimatedCursor from "react-animated-cursor";
import Head from "next/head";
import { prefix } from "./feature/content";
import axios from "axios";

const API_ENDPOINT = "https://api.sampleapis.com/futurama/info";

export function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://parkjeoungho.github.io/yujaPortfolio/" />
        <meta property="og:title" content="신유진의 포트폴리오입니다." />
        <meta property="og:description" content="디자이너 신유진의 포트폴리오입니다." />
        <meta property="og:image" content={`${prefix}assets/images/yujin_thumbnail.jpg`} />
        <meta property="og:site_name" content="신유진의 포트폴리오" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="shortcut icon" sizes="192x192" href={`${prefix}app_icon.png`} />
        <meta name="apple-mobile-web-app-title" content="신유진의 포트폴리오" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="apple-touch-icon" sizes="128x128" href={`${prefix}app_icon.png`} />
        <link rel="apple-touch-icon-precomposed" sizes="128x128" href={`${prefix}app_icon.png`} />
        <meta name="theme-color" content="#4285f4" />
        <link rel="icon" href={`${prefix}/favicon.ico`} />
        <title>신유진의 포트폴리오입니다.</title>
      </Head>
      <LayoutSelector>
        <Component {...pageProps} />
        <AnimatedCursor
          color="255, 255, 255"
          innerSize={1}
          outerSize={50}
          innerScale={1}
          outerScale={1.7}
          outerAlpha={1}
          showSystemCursor={true}
          outerStyle={{
            mixBlendMode: "exclusion",
          }}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
      </LayoutSelector>
    </>
  );
}

function LayoutSelector(props: PropsWithChildren) {
  const router = useRouter();

  const isSpecialUrl = some(["/_"], (prefix) => router.pathname.startsWith(prefix));

  if (isSpecialUrl) {
    return <>{props.children}</>;
  }

  return <FrontApp>{props.children}</FrontApp>;
}

const FrontApp = observer((props: PropsWithChildren<Record<never, any>>) => {
  return <LayoutView>{props.children}</LayoutView>;
});
