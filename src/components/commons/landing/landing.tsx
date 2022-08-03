import Landing1UI from "./landing1/Landing1.presenter";
import Landing2UI from "./landing2/Landing2.presenter";
import styled from "@emotion/styled";
import { useRef } from "react";
import LogInContainer from "../../units/login/LogIn.Container";
import { breakPoints } from "../../../commons/styles/media";
import LandingMobile from "./landingmobile/LandingMobile.presenter";
import { useQuery } from "@apollo/client";
import { USER_INFO } from "./landing.query";

const Root = styled.div`
  width: 100%;
  height: 100vh;

  /* @media ${breakPoints.tablet} {
    display: none;
  } */
  /* @media ${breakPoints.mobile} {
    display: none;
  } */
`;

const DownButton = styled.div`
  position: absolute;
  top: 15%;
  right: 15%;
  width: 55px;
  height: 55px;
  z-index: 5;
  background-image: url("https://storage.googleapis.com/front_image/scrollArrow.png");

  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  @media ${breakPoints.tablet} {
    top: 15%;
    left: 85%;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

const UpButton = styled.div`
  position: relative;
  width: 55px;
  height: 55px;
  bottom: -2050px;
  left: 85%;
  z-index: 5;
  background-image: url("https://storage.googleapis.com/front_image/scrollArrow.png");
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

const SocialLoginBox = styled.div`
  position: relative;
  width: 90vw;
  top: 4450px;
  left: 90px;
  margin-bottom: 100px;
  @media ${breakPoints.tablet} {
    /* display: none; */
  }
  @media ${breakPoints.mobile} {
    display: block;
  }
`;

export const Box = styled.div`
  position: absolute;
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
  top: 4900px;
  /* right: 150px; */
  bottom: 10%;
  @media ${breakPoints.tablet} {
    top: 0;
  }
  @media ${breakPoints.mobile} {
    top: 0;
  }
`;

export const WebLoginBox = styled.div`
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    display: block;
  }
`;

export const MoveToMain = styled.div`
  width: 150px;
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
  font-weight: 500;
  :hover {
    background-color: white;
    border: 1px solid #4167ee;
    color: #4167ee;
  }
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export default function LandingPage() {
  const downRef = useRef<any>();
  const upRef = useRef<any>();

  const { data } = useQuery(USER_INFO);
  console.log(data);

  const onClickMoveToDown = () => {
    downRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onClickMoveToUp = () => {
    upRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Root>
        <div ref={upRef}></div>
        <Landing1UI />
        <DownButton onClick={onClickMoveToDown} />
        <Landing2UI />
        <UpButton onClick={onClickMoveToUp} />
      </Root>
      {!data ? (
        <Box>
          <WebLoginBox ref={downRef}>
            <LogInContainer />
          </WebLoginBox>
        </Box>
      ) : (
        <Box>
          <LandingMobile />
          <SocialLoginBox ref={downRef}></SocialLoginBox>
          <MoveToMain>메인으로</MoveToMain>
        </Box>
      )}
    </>
  );
}
