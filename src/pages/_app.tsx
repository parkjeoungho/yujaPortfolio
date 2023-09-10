import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import { App } from "../app";
import dynamic from "next/dynamic";

export default dynamic(async () => App, { ssr: false });
