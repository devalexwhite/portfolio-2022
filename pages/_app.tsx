import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
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
