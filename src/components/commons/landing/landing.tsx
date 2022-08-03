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
  width: 100vw;
  height: 100vh;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

const DownButton = styled.div`
  position: absolute;
  width: 55px;
  height: 55px;
  bottom: 700px;
  left: 1450px;
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

const UpButton = styled.div`
  position: relative;
  width: 55px;
  height: 55px;
  bottom: -2050px;
  left: 1230px;
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
    display: none;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Box = styled.div`
  position: absolute;
  top: 5000px;
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
          <WebLoginBox>
            <LogInContainer />
          </WebLoginBox>
        </Box>
      ) : (
        <Box>
          <LandingMobile />
          <SocialLoginBox ref={downRef}></SocialLoginBox>
        </Box>
      )}
    </>
  );
}
