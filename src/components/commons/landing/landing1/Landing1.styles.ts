import styled from "@emotion/styled";
import Typical from "react-typical";

export const WrapperRoot = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  z-index: 1;
  background-image: url("/landing/BackEdit.gif");
  background-size: cover;
  background-position: center;
  /* filter: blur(1px); */
  /* -webkit-filter: blur(1px); */
`;

export const Icon = styled.img`
  position: relative;
  width: 100px;
  height: 51px;
  right: -600px;
  bottom: 750px;
  z-index: 2;
`;

export const TitleHead = styled.p`
  position: relative;
  font-family: Arial;
  width: 568px;
  height: 123px;
  color: #f9f9f9;
  font-weight: 900;
  font-size: 60px;
  left: -400px;
  bottom: 300px;
  z-index: 2;
`;

export const Title = styled(Typical)`
  position: relative;
  font-family: Arial;
  width: 568px;
  height: 123px;
  color: #f9f9f9;
  font-weight: 900;
  font-size: 50px;
  left: -400px;

  bottom: 400px;

  z-index: 2;
`;
