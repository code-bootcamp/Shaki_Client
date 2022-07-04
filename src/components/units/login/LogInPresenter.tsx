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
      <div
        style={{
          backgroundColor: "#FEE500",
          borderRadius: "5px",
          width: "186px",
          height: "46px",
          display: "flex",
          flexDirection: "row",
          // justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "3px",
          color: "#191919",
          fontWeight: "600",
          fontSize: "15px",
        }}
      >
        <img
          src="/icon/sociallogin/screenshotAtUploadCC_1656923287650.jpeg"
          style={{ width: "30px", height: "30px", marginRight: "15px" }}
        />
        카카오로 시작하기
      </div>
      <div
        style={{
          backgroundColor: "#03c75a",
          borderRadius: "5px",
          width: "186px",
          height: "46px",
          display: "flex",
          flexDirection: "row",
          // justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "5px",
          color: "white",
          fontWeight: "600",
          fontSize: "15px",
        }}
      >
        <img
          src="/icon/sociallogin/screenshotAtUploadCC_1656920622973.jpeg"
          style={{ width: "30px", height: "30px", marginRight: "15px" }}
        />
        네이버로 시작하기
      </div>
      <img src="/icon/sociallogin/btn_google_signin_light_normal_web.png" />
    </Li.Wrapper>
  );
}
