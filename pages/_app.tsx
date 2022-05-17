import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";
import * as gtag from "../lib/gtag";
import { useRouter } from "next/router";
import { useEffect } from "react";
const isProduction = process.env.NODE_ENV === "production";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      if (isProduction) gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="svg-settings h-0"
      >
        <defs>
          <linearGradient id="linear">
            <stop style={{ stopColor: "#ffa94d" }} offset="0%"></stop>
            <stop style={{ stopColor: "#e8590c" }} offset="100%"></stop>
          </linearGradient>
        </defs>
      </svg>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
