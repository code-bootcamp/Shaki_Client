import styled from "@emotion/styled";

export const WrapperRoot = styled.div`
  width: 100%;
`;

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
`;

export const Rectangle = styled.div`
  position: relative;
  width: 10px;
  height: 40px;
  left: 370px;
  top: 720px;
  background-image: url("/landing/landingdivider.png");
  transform: rotate(90deg);
`;

export const Header = styled.div`
  position: relative;
  width: 455px;
  height: 160px;
  left: 350px;
  top: 750px;
  background-image: url("/landing/landing2header.png");
  background-repeat: no-repeat;
`;

export const Contents = styled.div`
  position: relative;
  width: 437px;
  height: 84px;
  left: 350px;
  top: 750px;
  background-repeat: no-repeat;

  background-image: url("/landing/landing2text.png");
`;

export const MapWrapper = styled.div`
  position: relative;
  width: 1920px;
  height: 2500px;
  left: 0px;
  top: 2200px;
  background-color: #ffffff;
  z-index: 3;
`;

export const MapBody = styled.div`
  position: relative;
  width: 1920px;
  height: 1080px;
  left: -60px;
  top: 100px;

  background-image: url("/landing/3.png");
`;

export const Footer = styled.div`
  position: relative;
  width: 1168px;
  height: 848px;
  left: 320px;
  top: 700px;
  background-image: url("/landing/5.png");
`;

export const Box = styled.div`
  position: relative;
  top: 870px;
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
