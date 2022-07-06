import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import Typical from "react-typical";

export const WrapperRoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 140em;
  height: 1080px;
  background-image: url("/landing/BackEdit.gif");
  background-size: cover;
  background-position: center;
  filter: blur(1px);
  -webkit-filter: blur(1px);
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

export const Icon = styled.img`
  position: absolute;
  width: 47px;
  height: 51px;
  right: 80px;
  top: 60px;
`;

export const TitleHead = styled.p`
  position: absolute;
  font-family: Arial;
  width: 568px;
  height: 123px;
  color: #f9f9f9;
  font-weight: 900;
  font-size: 60px;
  left: 45px;
  bottom: 70px;
`;

export const Title = styled(Typical)`
  position: absolute;
  font-family: Arial;
  width: 568px;
  height: 123px;
  color: #f9f9f9;
  font-weight: 900;
  font-size: 50px;
  left: 45px;
  bottom: 50px;
`;
