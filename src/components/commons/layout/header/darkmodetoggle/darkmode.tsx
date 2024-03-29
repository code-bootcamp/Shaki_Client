import styled from "@emotion/styled";
import React, { ReactElement, useContext } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { lightTheme, Theme } from "../../../../../commons/styles/theme";
import { ThemeContext } from "../../../../../../pages/_app";
import { breakPoints } from "../../../../../commons/styles/media";

interface ToggleProps {
  theme: Theme;
}

const ToggleButton = styled("button")<ToggleProps>`
  position: fixed;
  width: 115px;
  height: 45px;
  right: 3rem;
  top: 1rem;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.BACKGROUND};
  color: ${({ theme }) => theme.MAIN};
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  z-index: 1;
  &:hover {
    filter: brightness(
      ${({ theme }) => (theme === lightTheme ? "0.9" : "1.13")}
    );
  }
  @media ${breakPoints.tablet} {
    width: 50px;
    height: 25px;
    right: 1rem;
    top: 4rem;
  }
  @media ${breakPoints.mobile} {
    width: 50px;
    height: 25px;
    right: 1rem;
    top: 4rem;
  }
`;

const ModeContent = styled.p`
  font-size: 0.8rem;
  margin-left: 5px;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export default function DarkModeToggle(): ReactElement {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ToggleButton onClick={toggleTheme} theme={theme}>
      {theme === lightTheme ? (
        <>
          {/* <Emoji> */}
          <DarkModeIcon aria-label="darkMoon" />
          {/* </Emoji> */}
          <ModeContent>다크 모드</ModeContent>
        </>
      ) : (
        <>
          {/* <Emoji> */}
          <LightModeIcon aria-label="lightSun" />
          {/* </Emoji> */}
          <ModeContent>라이트 모드</ModeContent>
        </>
      )}
    </ToggleButton>
  );
}
