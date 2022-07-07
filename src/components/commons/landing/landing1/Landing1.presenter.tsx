import Landing2UI from "../landing2/Landing2.presenter";
import * as Ld from "./Landing1.styles";

export default function Landing1UI() {
  return (
    <Ld.WrapperRoot>
      <Ld.Wrapper />
      <Ld.Icon src="/landing/landinglogo.png"></Ld.Icon>
      <Ld.TitleWrapper>
        <Ld.TitleHead>신개념 공유주방</Ld.TitleHead>
        <Ld.Title steps={["Sha(re) Ki(tchen)", 1500]} wrapper="p"></Ld.Title>
      </Ld.TitleWrapper>
      <Ld.SocialLoginBox>
        <Ld.SocialLogInButton src="/landing/BigKakaoLogIn2.png" />
        <Ld.SocialLogInButton
          src="/landing/BigNaverLogIn.png"
          style={{ width: "366px", height: "90px", marginTop: "10px" }}
        />
        <Ld.SocialLogInButton
          // ref={downRef}
          style={{
            marginTop: "5px",
            marginLeft: "-5px",
            borderRadius: "25px",
            width: "378px",
            height: "95px",
          }}
          src="/landing/BigGoogleLogIn2.png"
        />
      </Ld.SocialLoginBox>
    </Ld.WrapperRoot>
  );
}
