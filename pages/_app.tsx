import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { RecoilRoot } from "recoil";
import { GlobalStyle } from "../src/commons/styles/globalStyles";
import ApolloSetting from "../src/components/commons/apollo";
import LayoutPage from "../src/components/commons/layout";
import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import "antd/dist/antd.css";
import { darkTheme, lightTheme, Theme } from "../src/commons/styles/theme";
import { createContext } from "react";
import { useDarkMode } from "../src/hooks/useDarkMode";

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

  return (
    <RecoilRoot>
      <ApolloSetting>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <Global
            styles={GlobalStyle(theme === lightTheme ? lightTheme : darkTheme)}
          />
          <LayoutPage>
            <Component {...pageProps} />
          </LayoutPage>
        </ThemeContext.Provider>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
