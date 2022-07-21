import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { RecoilRoot } from "recoil";
import { GlobalStyle } from "../src/commons/styles/globalStyles";
import ApolloSetting from "../src/components/commons/apollo";
import LayoutPage from "../src/components/commons/layout";
import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import "antd/dist/antd.css";
import { useEffect } from "react";
import Head from "next/head";
import { darkTheme, lightTheme, Theme } from "../src/commons/styles/theme";
import { createContext } from "react";
import { useDarkMode } from "../src/hooks/useDarkMode";

declare const window: typeof globalThis & {
  Kakao: any;
};

interface ContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ContextProps>({
  theme: lightTheme,
  toggleTheme: () => {
    return null;
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const { theme, toggleTheme } = useDarkMode();
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
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Global
              styles={GlobalStyle(
                theme === lightTheme ? lightTheme : darkTheme
              )}
            />
            <LayoutPage>
              <Component {...pageProps} />
            </LayoutPage>
          </ThemeContext.Provider>
        </ApolloSetting>
      </RecoilRoot>
    );
  }
}

export default MyApp;
