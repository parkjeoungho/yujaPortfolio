import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import { App } from "../app";
import dynamic from "next/dynamic";
import { AppProps } from "next/app";

export default function NextApp(props: AppProps) {
  return <App {...props} />;
}
