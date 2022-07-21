import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { RecoilRoot, useRecoilState } from "recoil";
import { globalStyles } from "../src/commons/styles/globalStyles";
import ApolloSetting from "../src/components/commons/apollo";
import LayoutPage from "../src/components/commons/layout";
import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import "antd/dist/antd.css";
import { useEffect } from "react";
import Head from "next/head";

declare const window: typeof globalThis & {
  Kakao: any;
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    document.head.appendChild(script);
    script.onload = () => {
      window.Kakao.init("357c3087451d43e05fe837f631665a97");
      window.Kakao.isInitialized();
    };
  }, []);

  return (
    <RecoilRoot>
      <Head></Head>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <LayoutPage>
          <Component {...pageProps} />
        </LayoutPage>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
