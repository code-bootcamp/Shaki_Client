import * as He from "./Header.styles";

export default function HeaderPage() {
  return (
    <He.HeaderWrapper>
      <He.MenuWrapper>
        <div>Logo</div>
        <div>지점소개</div>
        <div>지점안내</div>
        <div>문의사항</div>
      </He.MenuWrapper>
      <He.BtnWrapper>
        <button>로그인</button>
        <button>회원가입</button>
      </He.BtnWrapper>
    </He.HeaderWrapper>
  );
}
