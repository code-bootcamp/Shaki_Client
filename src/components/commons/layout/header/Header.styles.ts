import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 0px 60px;
  @media ${breakPoints.tablet} {
    padding: 0px;
  }
  @media ${breakPoints.mobile} {
    height: 80px;
    padding: 0px;
  }
`;

export const LogoMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

// 아이콘
export const TitleIcon = styled.img`
  width: 100px;
  height: auto;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
