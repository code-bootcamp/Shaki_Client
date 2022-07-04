import * as He from "./Header.styles";

export default function HeaderPage() {
  return (
    // 헤더작업하기
    <He.HeaderWrapper>
      <He.MenuWrapper>
        <He.TitleIcon src="./logo.png" />
        <div>
          <div>지점소개</div>
          <div>지점안내</div>
          <div>문의사항</div>
        </div>
      </He.MenuWrapper>
      <He.BtnWrapper>
        <div>로그인</div>
        <div>회원가입</div>
      </He.BtnWrapper>
    </He.HeaderWrapper>
  );
}
