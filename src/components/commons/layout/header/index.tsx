import { useRouter } from "next/router";
import * as React from "react";
import * as THS from "./Header.styles";

const data = {
  Shaki: [
    {
      Roomlist: {
        1: "1번방",
        2: "2번방",
        3: "3번방",
      },
    },
    {
      Guro: {
        1: "1번방",
        2: "2번방",
        3: "3번방",
      },
    },
    {
      Shinrim: {
        1: "1번방",
        2: "2번방",
        3: "3번방",
      },
    },
  ],
};
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
          <THS.NavText id="/" onClick={onClickMovePage}>
            쉐이키 소개
          </THS.NavText>
          <THS.Dropdown>
            <THS.NavText id="main" onClick={onClickMovePage}>
              지점 소개
            </THS.NavText>
            <THS.DropdownContent className="dropdown-content">
              <THS.DropdownMenuWrapper>
                <THS.DropdownTwo>
                  <THS.Menu2Text id="detailpage" onClick={onClickMovePage}>
                    신대방역
                  </THS.Menu2Text>
                  <THS.DropdownContentTwo className="dropdown-content2"></THS.DropdownContentTwo>
                </THS.DropdownTwo>

                <THS.DropdownTwo>
                  <THS.Menu2Text>신림역</THS.Menu2Text>
                  <THS.DropdownContentTwo className="dropdown-content2"></THS.DropdownContentTwo>
                </THS.DropdownTwo>

                <THS.DropdownTwo>
                  <THS.Menu2Text>구로디지털역점</THS.Menu2Text>
                  <THS.DropdownContentTwo className="dropdown-content2"></THS.DropdownContentTwo>
                </THS.DropdownTwo>
              </THS.DropdownMenuWrapper>
            </THS.DropdownContent>
          </THS.Dropdown>

          <THS.NavText id="mypage" onClick={onClickMovePage}>
            마이페이지
          </THS.NavText>
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
