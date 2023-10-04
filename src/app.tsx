import { AppProps } from "next/app";
import { PropsWithChildren } from "react";
import { useRouter } from "next/router";
import { some } from "lodash";
import { observer } from "mobx-react-lite";
import LayoutView from "./view/layout";
import AnimatedCursor from "react-animated-cursor";

export function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
