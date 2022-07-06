import styled from "@emotion/styled";
import Typical from "react-typical";

export const WrapperRoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  z-index: 1;
  width: 140em;
  height: 1120px;
  background-image: url("/landing/BackEdit.gif");
  background-size: cover;
  background-position: center;
  /* filter: blur(1px); */
  /* -webkit-filter: blur(1px); */
`;

export const Icon = styled.img`
  position: relative;
  width: 47px;
  height: 51px;
  right: -550px;
  bottom: 1050px;
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
  bottom: 500px;
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
  left: -300px;

  bottom: 600px;

  z-index: 2;
`;
