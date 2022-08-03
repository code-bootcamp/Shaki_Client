import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Root = styled.div`
  display: block;
  @media ${breakPoints.tablet} {
    width: 110vw;
    height: 550px;
    background-image: url("https://storage.googleapis.com/front_image/BackEdit.gif");
    background-size: cover;
    background-repeat: no-repeat;
  }
  @media ${breakPoints.mobile} {
    width: 120vw;
    height: 320px;
    background-image: url("https://storage.googleapis.com/front_image/BackEdit.gif");
    background-size: cover;
    /* background-position: center; */
    background-repeat: no-repeat;
  }
`;

export const Title = styled.h1`
  display: block;

  @media ${breakPoints.tablet} {
    position: absolute;
    top: 420px;
    left: 30px;
    color: white;
    font-weight: 800;
  }
  @media ${breakPoints.mobile} {
    position: absolute;
    top: 210px;
    left: 30px;
    color: white;
    font-weight: 800;
  }
`;

export const Body = styled.div`
  display: block;
  @media ${breakPoints.tablet} {
    width: 110vw;
    height: 250px;
    /* background-image: url("/landing/4.png"); */
    background-image: url("https://storage.googleapis.com/front_image/4.png");

    background-size: 310px;
    background-repeat: no-repeat;
    background-color: black;
    background-position: center;
  }
  @media ${breakPoints.mobile} {
    width: 120vw;
    height: 250px;
    background-image: url("https://storage.googleapis.com/front_image/4.png");
    background-size: 300px;
    background-repeat: no-repeat;
    background-color: black;
    background-position: center;
  }
`;

export const Footer = styled.div`
  display: block;

  @media ${breakPoints.tablet} {
    width: 100vw;
    height: 500px;
    background-image: url("https://storage.googleapis.com/front_image/5.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 10px;
  }
  @media ${breakPoints.mobile} {
    width: 110vw;
    height: 390px;
    background-image: url("https://storage.googleapis.com/front_image/5.png");
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const Button = styled.button`
  display: block;

  @media ${breakPoints.tablet} {
    width: 91px;
    height: 34px;
    border: none;
    background: #4167ee;
    color: white;
    text-align: center;
    padding-top: 3px;
    border-radius: 5px;
    margin: auto;
    margin-bottom: 20px;
    margin-top: 30px;
    :hover {
      background-color: white;
      border: 1px solid #4167ee;
      color: #4167ee;
    }
  }
  @media ${breakPoints.mobile} {
    width: 89px;
    height: 34px;
    border: none;
    background: #4167ee;
    color: white;
    text-align: center;
    padding-top: 3px;
    margin-left: 173px;
    border-radius: 5px;
    margin-top: 15px;
    margin-bottom: 20px;
    :hover {
      background-color: white;
      border: 1px solid #4167ee;
      color: #4167ee;
    }
  }
`;
