import styled from "@emotion/styled";
import { Theme } from "../../../commons/styles/theme";

interface ThemeProps {
  theme: Theme;
}

export const Body = styled.div`
  width: 100%;
`;
// 사이드
export const PageWrapper = styled.div<ThemeProps>`
  display: flex;
  flex-direction: row;
  position: sticky;
  background: ${({ theme }) => theme.BACKGROUND};
  color: ${({ theme }) => theme.MAIN};
  transition: all 0.9s ease-in-out;
`;

export const FooterWrapper = styled.div`
  display: flex;
  position: sticky;
`;
