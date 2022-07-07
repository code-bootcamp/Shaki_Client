import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import ApolloSetting from "../src/components/commons/apollo";
import LayoutPage from "../src/components/commons/layout";
import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import "antd/dist/antd.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloSetting>
      <Global styles={globalStyles} />
      <LayoutPage>
        <Component {...pageProps} />
      </LayoutPage>
    </ApolloSetting>
  );
}

export default MyApp;
