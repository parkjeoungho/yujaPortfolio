import { AppProps } from "next/app";
import { PropsWithChildren } from "react";
import { useRouter } from "next/router";
import { some } from "lodash";
import { observer } from "mobx-react-lite";
import LayoutView from "./view/layout";

export function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutSelector>
      <Component {...pageProps} />
    </LayoutSelector>
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
