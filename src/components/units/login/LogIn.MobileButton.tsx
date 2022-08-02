import * as Li from "./MobileButton.Style";

interface IMobileButtonProps {
  onClickNaverLogIn: () => void;
  onClickGoogleLogIn: () => void;
  onClickKakaoLogIn: () => void;
}
export default function LogInMobileButtonStyle(props: IMobileButtonProps) {
  return (
    <Li.Wrapper>
      <Li.KaKaoBox onClick={props.onClickKakaoLogIn}>
        <Li.KaKaoButton src="/icon/sociallogin/screenshotAtUploadCC_1656926938552.jpeg" />
        카카오로 시작하기
      </Li.KaKaoBox>
      <Li.NaverBox onClick={props.onClickNaverLogIn}>
        <Li.NaverButton src="/icon/sociallogin/screenshotAtUploadCC_1656920622973.jpeg" />
        네이버로 시작하기
      </Li.NaverBox>
      <Li.GoogleBox
        onClick={props.onClickGoogleLogIn}
        src="/icon/sociallogin/btn_google_signin_light_normal_web.png"
      />
    </Li.Wrapper>
  );
}
