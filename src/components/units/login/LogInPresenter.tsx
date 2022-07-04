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
          <Li.Social src="/icon/sociallogin/kakaoLogin.png" />
          <Li.Social src="/icon/sociallogin/naverlogin.png" />
          <Li.Social src="/icon/sociallogin/googlelogin.svg" />
        </Li.LowerBody>
        <Li.LogIn>로그인하기</Li.LogIn>
      </Li.MiddleWrapper>
      <Li.Footer>비회원 둘러보기</Li.Footer>
    </Li.Wrapper>
  );
}
