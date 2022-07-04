import LogInMobileButtonStyle from "./LogInMobileButton";
import * as Li from "./LogInStyle";

export default function LogInPresenter(props: any) {
  return (
    <Li.Wrapper>
      <Li.MiddleWrapper>
        <Li.Head>로그인</Li.Head>
        <Li.UpperBody>
          이메일
          <Li.Email type="text" {...props.register("email")} />
          비밀번호
          <Li.Password type="text" {...props.register("password")} />
        </Li.UpperBody>
        <Li.LowerBody>
          다음 소셜계정으로 로그인하기
          <Li.MobileBox>
            <LogInMobileButtonStyle />
          </Li.MobileBox>
          <Li.ImgWrapper>
            <Li.ImgBox>
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
        <Li.LogIn>로그인하기</Li.LogIn>
      </Li.MiddleWrapper>
      <Li.Footer>비회원 둘러보기</Li.Footer>
    </Li.Wrapper>
  );
}
