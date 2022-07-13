import Landing1UI from "./landing1/Landing1.presenter";
import Landing2UI from "./landing2/Landing2.presenter";
import styled from "@emotion/styled";
import { useRef } from "react";
import LogInContainer from "../../units/login/LogIn.Container";

const DownButton = styled.div`
  position: absolute;
  width: 55px;
  height: 55px;
  bottom: -100px;
  left: 1250px;
  z-index: 5;
  /* background-color: white; */
  background-image: url("/landing/scrollArrow.png");
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;

const UpButton = styled.div`
  position: absolute;
  width: 55px;
  height: 55px;
  bottom: -4500px;
  left: 1230px;
  z-index: 5;
  /* background-color: white; */
  background-image: url("/landing/scrollArrow.png");
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;

const SocialLoginBox = styled.div`
  position: relative;
  width: 70vw;
  top: 2000px;
  left: 90px;
  margin-bottom: 100px;
`;

export default function LandingPage() {
  const downRef = useRef<any>();
  const upRef = useRef<any>();

  const onClickMoveToDown = () => {
    downRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onClickMoveToUp = () => {
    upRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div ref={upRef}></div>
      <Landing1UI />
      <DownButton onClick={onClickMoveToDown} />
      <Landing2UI />
      <UpButton onClick={onClickMoveToUp} />
      <SocialLoginBox ref={downRef}>
        {/* <SocialLogInButton src="/landing/BigKakaoLogIn2.png" />
        <SocialLogInButton
          src="/landing/BigNaverLogIn.png"
          style={{ width: "366px", height: "90px", marginTop: "10px" }}
        />
        <SocialLogInButton
          ref={downRef}
          style={{
            marginTop: "5px",
            marginLeft: "-5px",
            borderRadius: "25px",
            width: "378px",
            height: "95px",
          }}
          src="/landing/BigGoogleLogIn2.png"
        /> */}
        <LogInContainer />
      </SocialLoginBox>
      {/* <div ref={downRef}></div> */}
    </div>
  );
}
