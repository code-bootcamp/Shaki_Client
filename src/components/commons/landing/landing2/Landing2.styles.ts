import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  position: absolute;
  width: 1920px;
  height: 4185px;
  left: 0px;
  top: 850px;
  background-image: url("/landing/header 1.png");
  background-size: cover;
  /* filter: blur(1px); */
  /* -webkit-filter: blur(1px); */
  @media ${breakPoints.tablet} {
    width: 100%;
    height: 600px;
    background-size: cover;
  }
  @media ${breakPoints.mobile} {
    height: 430px;
  }
  @media (max-width: 470px) {
    height: 330px;
  }
`;

export const Rectangle = styled.div`
  position: absolute;
  width: 10px;
  height: 40px;
  left: 370px;
  top: 720px;
  background-image: url("/landing/landingdivider.png");
  transform: rotate(90deg);
`;

export const Header = styled.div`
  position: absolute;
  width: 455px;
  height: 160px;
  left: 360px;
  top: 800px;
  background-image: url("/landing/landing2header.png");
  background-repeat: no-repeat;
`;

export const Contents = styled.div`
  position: absolute;
  width: 437px;
  height: 84px;
  left: 360px;
  top: 970px;
  background-repeat: no-repeat;

  background-image: url("/landing/landing2text.png");
`;

export const MapWrapper = styled.div`
  position: absolute;
  width: 1920px;
  height: 2500px;
  left: 0px;
  top: 2200px;
  background-color: #ffffff;
  z-index: 3;
`;

export const MapBody = styled.div`
  position: absolute;
  width: 1920px;
  height: 1080px;
  left: -60px;
  top: 100px;

  background-image: url("/landing/3.png");
`;

export const Footer = styled.div`
  position: absolute;
  width: 1168px;
  height: 848px;
  left: 320px;
  top: 1500px;
  background-image: url("/landing/5.png");
`;

export const Box = styled.div`
  position: absolute;
  top: 3300px;
  width: 100%;
  height: 500px;
  background-color: black;
  z-index: 3;
  transform: skewY(-10deg);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BoxImage = styled.img`
  transform: skewY(10deg);
`;
