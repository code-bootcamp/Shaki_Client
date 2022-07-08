import LogInMobileButtonStyle from "./LogInMobileButton";
import * as Li from "./LogInStyle";

export default function LogInPresenter(props: any) {
  return (
    <Li.WrapperRoot onSubmit={props.handleSubmit(props.onClickLogIn)}>
      <Li.WrapperImg />
      <Li.Wrapper>
        <Li.panel>
          <Li.MiddleWrapper>
            <Li.Head>로그인</Li.Head>
            <Li.UpperBody>
              이메일
              <Li.Email type="text" {...props.register("email")} />
              비밀번호
              <Li.Password type="text" {...props.register("pwd")} />
            </Li.UpperBody>
            <Li.LowerBody>
              다음 소셜계정으로 로그인하기
              <Li.MobileBox>
                <LogInMobileButtonStyle />
              </Li.MobileBox>
              <Li.ImgWrapper>
                <Li.ImgBox onClick={props.onClickKakaoLogIn}>
                  <Li.Social src="/icon/sociallogin/kakaotalk_sharing_btn_small_ov.png" />
                  <Li.SocialTitle>카카오</Li.SocialTitle>
                </Li.ImgBox>
                <Li.ImgBox>
                  <Li.Social src="/icon/sociallogin/screenshotAtUploadCC_1656920622973.jpeg" />
                  <Li.SocialTitle>네이버</Li.SocialTitle>
                </Li.ImgBox>
                <Li.ImgBox>
                  <Li.Social
                    style={{ borderRadius: "5px" }}
                    src="/icon/sociallogin/screenshotAtUploadCC_1656924592824.jpeg"
                  />
                  <Li.SocialTitle>google</Li.SocialTitle>
                </Li.ImgBox>
              </Li.ImgWrapper>
            </Li.LowerBody>
            <Li.LogIn>로그인</Li.LogIn>
            아직 회원이 아니신가요?
            <Li.SignUp onClick={props.onClickMoveToSignUp}>회원가입</Li.SignUp>
          </Li.MiddleWrapper>
        </Li.panel>
        <Li.Footer onClick={props.onClickMoveToMain}>비회원 둘러보기</Li.Footer>
      </Li.Wrapper>
    </Li.WrapperRoot>
  );
}
