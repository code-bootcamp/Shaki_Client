import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { Theme } from "../../../../commons/styles/theme";

interface ToggleProps {
  theme: Theme;
}

export const FooterWrapper = styled.div<ToggleProps>`
  position: sticky;
  background: ${({ theme }) => theme.FOOTERBACKGROUND};
  width: 100%;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3em;
  z-index: 4;
  transition: all 0.9s ease-in-out;
  @media ${breakPoints.tablet} {
    padding: 2em;
  }
  @media ${breakPoints.mobile} {
    padding: 1em;
  }
`;

export const LogoImg = styled.img`
  width: 90px;
  height: 80px;
  margin-bottom: 20px;
  @media ${breakPoints.mobile} {
    width: 80px;
    height: 70px;
  }
`;

export const TextInfo = styled.div`
  display: flex;
  flex-direction: row;
  color: #4f7ab5;
  font-weight: 500;
  font-size: 14px;
  @media ${breakPoints.mobile} {
    font-weight: 500;
    font-size: 12px;
  }
`;

export const HeightLine = styled.p`
  font-size: 13px;
  margin: 0px 10px;
`;
