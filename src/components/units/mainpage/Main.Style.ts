import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
import { Theme } from "../../../commons/styles/theme";

interface ThemeProps {
  theme: Theme;
}

export const HTML = styled.div<ThemeProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.BACKGROUND};
  color: ${({ theme }) => theme.MAIN};
  transition: all 0.9s ease-in-out;
`;

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
  @media ${breakPoints.mobile} {
    width: 90%;
  }
  @media ${breakPoints.tablet} {
    width: 90%;
  }
`;

export const ImageWrapper2 = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  /* vertical-align: text-top; */
  @media ${breakPoints.mobile} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }
  @media ${breakPoints.tablet} {
    width: 100%;
  }
`;

export const MainContextWrapper = styled.div`
  /* vertical-align: text-top; */
`;

export const ImageHeader = styled.div`
  height: 65px;
  font-size: 36px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 80px;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: auto;
    font-size: 20px;
    padding-left: 20px;
    margin-top: 30px;
  }
  @media ${breakPoints.tablet} {
    font-size: 30px;
    padding-left: 15px;
    margin-top: 30px;
  }
`;

export const ImageHeaderIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: -20px;
  margin-top: -30px;
  z-index: -1;
  opacity: 0.6;
  background-color: #4167ee;
  @media ${breakPoints.mobile} {
    width: 20px;
    height: 20px;
    margin-left: -10px;
    margin-top: -10px;
  }
  @media ${breakPoints.tablet} {
    width: 40px;
    height: 40px;
  }
`;

export const MainContents = styled.div`
  cursor: pointer;
  /* vertical-align: text-top; */
  img:hover {
    opacity: 0.5;
  }
`;

export const MainImg = styled.img`
  width: 100%;
  height: 570px;
  border-radius: 50px 50px 0 0;
  margin-top: 20px;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 250px;
    border-radius: 20px 20px 0 0;
    margin-top: 20px;
  }
  @media ${breakPoints.tablet} {
    width: 100%;
    height: 450px;
    margin-top: 25px;
  }
`;

export const ImageUnderBar = styled.div`
  margin-bottom: 20px;
  width: 100%;
  height: 85px;
  display: flex;
  flex-direction: row;
  background-color: #4e75ff;
  border-radius: 0 0 50px 0;
  padding: 0 3%;
  color: white;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 70px;
    padding: 8px 10px;
    font-size: 10px;
    border-radius: 0 0 20px 0;
    display: flex;
    flex-direction: column-reverse;
    line-height: 14px;
  }
  @media ${breakPoints.tablet} {
    width: 100%;
    height: 80px;
    font-size: 14px;
    border-radius: 0 0 20px 0;
    display: flex;
    flex-direction: column-reverse;
    padding: 10px 0;
  }
`;

export const UnderBarIcon = styled.img``;
