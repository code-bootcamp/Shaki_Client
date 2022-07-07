import styled from "@emotion/styled";

export const WrapperRoot = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0px;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;

  background-image: url("/landing/header 1.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  /* filter: blur(1px); */
  /* -webkit-filter: blur(1px); */
`;

export const Rectangle = styled.div`
  position: relative;
  width: 10px;
  height: 40px;
  left: 370px;
  top: 1000px;
  background-image: url("/landing/landingdivider.png");
  transform: rotate(90deg);
`;

export const Header = styled.div`
  position: relative;
  width: 455px;
  height: 160px;
  left: 350px;
  top: 1000px;
  background-image: url("/landing/landing2header.png");
  background-repeat: no-repeat;
`;

export const Contents = styled.div`
  position: relative;
  width: 437px;
  height: 84px;
  left: 350px;
  top: 1000px;
  background-repeat: no-repeat;

  background-image: url("/landing/landing2text.png");
`;

export const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 2500px;
  left: 0px;
  top: 2200px;
  background-color: #ffffff;
  z-index: 3;
`;

export const MapBody = styled.div`
  position: relative;
  width: 100%;
  height: 1080px;

  background-image: url("/landing/3.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
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
  top: 700px;
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
