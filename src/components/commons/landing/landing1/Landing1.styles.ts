import styled from "@emotion/styled";
import Typical from "react-typical";
import { breakPoints } from "../../../../commons/styles/media";

export const WrapperRoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* @media ${breakPoints.tablet} {
    display: none;
  } */
  /* @media ${breakPoints.mobile} {
    display: none;
  } */
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  z-index: 1;
  background-image: url("https://storage.googleapis.com/front_image/BackEdit.gif");
  background-size: cover;
  background-position: center;
  /* filter: blur(1px); */
  /* -webkit-filter: blur(1px); */
  /* @media ${breakPoints.tablet} {
    display: none;
  } */
  /* display: none; */
  /* @media ${breakPoints.mobile} {
    display: none;
  } */
`;

export const Icon = styled.img`
  width: 70px;
  height: 60px;
  display: flex;
  align-items: flex-end;
  position: absolute;
  top: 50px;
  right: 50px;
  z-index: 1;
`;

export const TitleWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  /* margin-left: 20px; */
`;
export const TitleHead = styled.div`
  position: absolute;
  bottom: 100px;
  left: 100px;
  font-family: Arial;
  color: #f9f9f9;
  font-weight: 900;
  font-size: 60px;
  z-index: 2;
  @media ${breakPoints.tablet} {
    left: 0;
    margin-left: 20px;
  }
  @media ${breakPoints.mobile} {
    font-size: 40px;
    left: 0;
    margin-left: 10px;
    bottom: 60px;
  }
`;

export const Title = styled(Typical)`
  /* width: 800px; */
  position: absolute;
  left: 140px;
  font-family: Arial;
  color: #f9f9f9;
  font-weight: 900;
  font-size: 60px;
  z-index: 2;
  margin-left: 20px;
  @media ${breakPoints.tablet} {
    left: 0;
  }
  @media ${breakPoints.mobile} {
    font-size: 30px;
    left: 0;
  }
`;
