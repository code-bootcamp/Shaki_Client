import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import * as THS from "./Header.styles";
import { LOG_OUT } from "./mutation";

export default function TestNavTabs() {
  const router = useRouter();

  const [logOutUser] = useMutation(LOG_OUT);

  const onClickMovePage = (e: any) => {
    router.push(`/${e.target.id}`);
  };

  const onClickLogOut = (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      logOutUser();
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <THS.Wrapper>
      {/* 로고이미지 */}
      <THS.LeftHeadWrapper>
        <THS.LogoImg src="./logo.png" />
        {/* 네비 메뉴 */}
        <THS.NavMenu>
          <THS.NavText
            id="/"
            isPosition={router.asPath.split("/")[1]}
            onClick={onClickMovePage}
          >
            쉐이키 소개
          </THS.NavText>
          <THS.Dropdown>
            <THS.NavText
              id="main"
              onClick={onClickMovePage}
              isPosition={router.asPath.split("/")[1]}
            >
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

          <THS.NavText
            id="mypage"
            onClick={onClickMovePage}
            isPosition={router.asPath.split("/")[1]}
          >
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
        {/* <THS.Button id="logOut" onClick={onClickLogOut}>
          로그아웃
        </THS.Button> */}
      </THS.BtnWrapper>
    </THS.Wrapper>
  );
}
