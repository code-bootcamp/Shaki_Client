import { AppProps } from "next/app";
import LayoutPage from "../src/components/commons/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutPage>
      <Component {...pageProps} />
    </LayoutPage>
  );
}

export default MyApp;
