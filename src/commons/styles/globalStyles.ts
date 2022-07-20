import { css } from "@emotion/react";
import { Theme } from "../styles/theme";
import emotionReset from "emotion-reset";

export const GlobalStyle = (props: Theme) =>
  css`
    ${emotionReset},

    * {
      margin: 0;
      box-sizing: border-box;
      /* font-family: "myfont"; */
    }
    body {
      background: ${props.BACKGROUND};
      color: ${props.MAIN};
      transition: all 0.5s ease-in-out;
    }
    /* div {
      background: ${props.BACKGROUND};
      color: ${props.MAIN};
      transition: all 0.5s ease-in-out;
    } */
    h2 {
      background: ${props.BACKGROUND};
      color: ${props.SUB};
      transition: all 0.5s ease-in-out;
    }
  `;
