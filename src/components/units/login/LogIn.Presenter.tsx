import { useContext } from "react";
import { ThemeContext } from "../../../../pages/_app";
import LogInMobileButtonStyle from "./LogIn.MobileButton";
import * as Li from "./LogIn.Style";

export default function LogInPresenter(props: any) {
  const { theme } = useContext(ThemeContext);

  return (
    <Li.WrapperRoot
      ref={props.inputRef}
      onSubmit={props.handleSubmit(props.onClickLogIn)}
    >
      {/* <div onClick={props.onClick}>asdasdsad</div> */}
      <Li.Wrapper>
        <Li.WrapperImg src="/foodlogin2.webp" />
        <Li.LogInWrapper>
          <Li.panel>
            <Li.MiddleWrapper>
              <Li.Head>
                로그인
                <Li.AdminOnOffBox>
                  관리자 로그인
                  <Li.AdminToggle adminOn={props.adminOn}>
                    <Li.AdminToggleButton onClick={props.onClickAdmin} />
                  </Li.AdminToggle>
                </Li.AdminOnOffBox>
              </Li.Head>
              {!props.adminOn ? (
                <Li.UpperBody>
                  이메일
                  <Li.Email
                    theme={theme}
                    type="text"
                    defaultValue=""
                    // ref={props.inputRef}
                    {...props.register("email")}
                  />
                  비밀번호
                  <Li.Password
                    theme={theme}
                    type="password"
                    defaultValue=""
                    // ref={props.inputRef}
                    {...props.register("pwd")}
                  />
                </Li.UpperBody>
              ) : (
                <Li.UpperBody>
                  이메일
                  <Li.Email
                    theme={theme}
                    type="text"
                    value="admin@admin.com"
                    {...props.register("email")}
                  />
                  비밀번호
                  <Li.Password
                    theme={theme}
                    type="password"
                    value="rhksflwk123"
                    {...props.register("pwd")}
                  />
                </Li.UpperBody>
              )}
              <Li.LowerBody>
                다음 소셜계정으로 로그인하기
                <Li.MobileBox>
                  <LogInMobileButtonStyle
                    onClickKakoLogIn={props.onClickKakoLogIn}
                    onClickGoogleLogIn={props.onClickGoogleLogIn}
                    onClickNaverLogIn={props.onClickNaverLogIn}
                  />
                </Li.MobileBox>
                <Li.ImgWrapper>
                  <Li.ImgBox>
                    <Li.Social src="/icon/sociallogin/kakaotalk_sharing_btn_small_ov.png" />
                    <Li.SocialTitle onClick={props.onClickKakoLogIn}>
                      카카오
                    </Li.SocialTitle>
                  </Li.ImgBox>
                  <Li.ImgBox onClick={props.onClickNaverLogIn}>
                    <Li.Social src="/icon/sociallogin/screenshotAtUploadCC_1656920622973.jpeg" />
                    <Li.SocialTitle>네이버</Li.SocialTitle>
                  </Li.ImgBox>
                  <Li.ImgBox onClick={props.onClickGoogleLogIn}>
                    <Li.Social
                      style={{ borderRadius: "5px" }}
                      src="/icon/sociallogin/screenshotAtUploadCC_1656924592824.jpeg"
                    />
                    <Li.SocialTitle>google</Li.SocialTitle>
                  </Li.ImgBox>
                </Li.ImgWrapper>
              </Li.LowerBody>
              <Li.LogInBox>
                <Li.LogIn>로그인</Li.LogIn>
                <Li.FindEmail onClick={props.onClickMoveToFindAccount}>
                  계정찾기
                </Li.FindEmail>
              </Li.LogInBox>
              <Li.SignUpBox>
                아직 회원이 아니신가요?
                <Li.SignUp onClick={props.onClickMoveToSignUp}>
                  회원가입
                </Li.SignUp>
              </Li.SignUpBox>
            </Li.MiddleWrapper>
          </Li.panel>
        </Li.LogInWrapper>
      </Li.Wrapper>
      <Li.CommentBox onClick={props.onClickMoveToMain}>
        비회원 둘러보기
      </Li.CommentBox>
    </Li.WrapperRoot>
  );
}
