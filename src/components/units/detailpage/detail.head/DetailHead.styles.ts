import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { Theme } from "../../../../commons/styles/theme";

interface ThemeProps {
  theme: Theme;
}

export const Wrapper = styled.div<ThemeProps>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.BACKGROUND};
  color: ${({ theme }) => theme.MAIN};
  transition: all 0.9s ease-in-out;
`;

export const HeadInfoWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  @media ${breakPoints.tablet} {
    width: 850px;
  }
  @media ${breakPoints.mobile} {
    width: 475px;
  }
`;
export const PickWrapper = styled.div``;

export const PickImg = styled.img``;

export const QuestionBtn = styled.button`
  width: 112px;
  height: 42px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-left: 20px;
  font-weight: 500;
  font-size: 15px;
  color: black;
  transition-duration: 2s;
  :hover {
    cursor: pointer;
    background-color: #4e75ff;
    color: white;
    transition-duration: 2s;
  }
`;

export const HeadInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

// 이미지
export const ExImgBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media ${breakPoints.mobile} {
    flex-direction: column;
    justify-content: center;
  }
`;
export const ExImgTitle = styled.img`
  width: 540px;
  height: 466px;
  background-color: lightgray;
  border-radius: 5px;
  @media ${breakPoints.tablet} {
    width: 306px;
    height: 340px;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 340px;
    margin-bottom: 20px;
  }
`;

export const ExImgWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`;

export const ExImg = styled.img`
  width: 310px;
  height: 220px;
  background-color: lightgray;
  margin-left: 24px;
  border-radius: 5px;
  @media ${breakPoints.tablet} {
    width: 206px;
    height: 160px;
    margin-left: 14px;
  }
  @media ${breakPoints.mobile} {
    width: 95%;
    height: 160px;
    margin-bottom: 5px;
    margin-left: 5px;
  }
`;
