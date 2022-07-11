import styled from "@emotion/styled";

export const HTML = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WrapperRoot = styled.div`
  width: 100vw;
  position: relative;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 1500px;
  background-image: url("/landing/header 1.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Rectangle = styled.div`
  position: absolute;
  width: 10px;
  height: 40px;
  left: 420px;
  top: 95px;
  background-image: url("/landing/landingdivider.png");
  transform: rotate(90deg);
`;

export const Header = styled.div`
  position: absolute;
  width: 455px;
  height: 160px;
  top: 150px;
  left: 400px;
  background-image: url("/landing/landing2header.png");
  background-repeat: no-repeat;
`;

export const Contents = styled.div`
  position: absolute;
  width: 437px;
  height: 84px;
  top: 300px;
  left: 400px;
  background-repeat: no-repeat;
  background-image: url("/landing/landing2text.png");
`;

export const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  left: 0px;
  top: 1500px;
  background-color: #ffffff;
  z-index: 3;
`;

export const MapBody = styled.div`
  position: absolute;
  width: 1200px;
  padding-top: 170px;
  height: 740px;
  /* background-image: url("/landing/3.png"); */
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Box = styled.div`
  position: relative;
  top: 2600px;
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
  position: absolute;
  transform: skewY(10deg);
`;

export const Footer = styled.div`
  position: relative;
  width: 1168px;
  height: 848px;
  left: 320px;
  top: 1800px;
  background-image: url("/landing/5.png");
`;

export const SocialLoginBox = styled.div`
  position: relative;
  width: 30vw;
  flex-direction: column;
  justify-content: center;
  top: 1900px;
  left: 600px;
  margin-bottom: 100px;
`;
