import { useRouter } from "next/router";
import * as React from "react";
import * as THS from "./Header.styles";

export default function TestNavTabs() {
  const router = useRouter();

  const onClickMovePage = (e: any) => {
    router.push(`/${e.target.id}`);
  };
  return (
    <THS.Wrapper>
      {/* 로고이미지 */}
      <THS.LeftHeadWrapper>
        <THS.LogoImg src="./logo.png" />
        {/* 네비 메뉴 */}
        <THS.NavMenu>
          <THS.NavTest id="/" onClick={onClickMovePage}>
            쉐이키 소개
          </THS.NavTest>
          <THS.NavTest id="main" onClick={onClickMovePage}>
            지점안내
          </THS.NavTest>
          <THS.NavTest id="mypage" onClick={onClickMovePage}>
            마이페이지
          </THS.NavTest>
        </THS.NavMenu>
      </THS.LeftHeadWrapper>
      {/* 회원가입 / 로그인  */}
      <THS.BtnWrapper>
        <THS.Button id="login" onClick={onClickMovePage}>
          로그인
        </THS.Button>
        <THS.Button id="signup" onClick={onClickMovePage}>
          회원가입
        </THS.Button>
      </THS.BtnWrapper>
    </THS.Wrapper>
  );
}
