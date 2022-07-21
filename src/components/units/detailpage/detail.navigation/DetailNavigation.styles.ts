import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { Theme } from "../../../../commons/styles/theme";

interface IPage {
  id: string;
  isPosition: string;
}

interface ThemeProps {
  theme: Theme;
}

export const Wrapper = styled.div<ThemeProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  background: ${({ theme }) => theme.BACKGROUND};
  color: ${({ theme }) => theme.MAIN};
  transition: all 0.9s ease-in-out;
`;

export const MenuWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 60px;
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media ${breakPoints.tablet} {
    width: 890px;
  }
  @media ${breakPoints.mobile} {
    width: 475px;
  }
`;

export const MenuName = styled.div`
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  width: 100%;
  text-align: center;
  padding: 10px;
  color: ${(props: IPage) =>
    props.id === props.isPosition ? "#4167ee" : "black"};
  border-bottom: ${(props: IPage) =>
    props.id === props.isPosition ? "2px solid #4167ee" : "none"};
  &:hover {
    color: #4167ee;
    border-bottom: 2px solid #4167ee;
  }
`;
