import { useContext } from "react";
import { ThemeContext } from "../../../../../pages/_app";
import DarkModeToggle from "./darkmodetoggle/darkmode";
import * as THS from "./Header.styles";

interface IHeaderType {
  onClickMovePage: (e: any) => void;
  onClickMoveDetail: (e: any) => void;
  onClickLogOut: (event: React.MouseEvent<HTMLButtonElement>) => void;
  accessToken: string;
  data: {
    fetchLoginUser: {
      email: string;
      name: string;
    };
  };
  dataFetchBranches: {
    fetchBranches: {
      id: string;
      branch: {
        branch: string;
        id: string;
      };
    };
  };
  router: any;
}

export default function HeaderUI(props: IHeaderType) {
  const { theme } = useContext(ThemeContext);
  return (
    <THS.Wrapper theme={theme}>
      {/* 로고이미지 */}
      <THS.LeftHeadWrapper>
        <THS.LogoImg src="./logo.png" />
        {/* 네비 메뉴 */}
        <THS.NavMenu>
          <THS.NavText
            id="/"
            isPosition={props.router.asPath.split("/")[1]}
            onClick={props.onClickMovePage}
          >
            쉐이키소개
          </THS.NavText>
          <THS.Dropdown>
            <THS.NavText
              id="main"
              onClick={props.onClickMovePage}
              isPosition={props.router.asPath.split("/")[1]}
            >
              지점소개
            </THS.NavText>
            {/* 메뉴 map 으로 뿌려주기 */}
            <THS.DropdownContent className="dropdown-content">
              <THS.DropdownMenuWrapper>
                {props.dataFetchBranches?.fetchBranches.map((el: any) => (
                  <THS.DropdownTwo key={el.branch.id}>
                    <THS.Menu2Text id={el.id} onClick={props.onClickMoveDetail}>
                      {el.branch.branch}
                    </THS.Menu2Text>
                    <THS.DropdownContentTwo className="dropdown-content2"></THS.DropdownContentTwo>
                  </THS.DropdownTwo>
                ))}
              </THS.DropdownMenuWrapper>
            </THS.DropdownContent>
          </THS.Dropdown>

          <THS.NavText
            id="mypage"
            onClick={props.onClickMovePage}
            isPosition={props.router.asPath.split("/")[1]}
          >
            마이페이지
          </THS.NavText>
        </THS.NavMenu>
      </THS.LeftHeadWrapper>
      {/* 회원가입 / 로그인  */}
      <THS.BtnWrapper>
        {props.accessToken ? (
          <THS.IsLogedin>
            <THS.UserText>
              <THS.UserName>
                {props.data?.fetchLoginUser.name.slice(0, 5)}님
              </THS.UserName>
              &nbsp;환영합니다!
            </THS.UserText>
            <THS.Button id="logOut" onClick={props.onClickLogOut}>
              로그아웃
            </THS.Button>
          </THS.IsLogedin>
        ) : (
          <div>
            <THS.Button id="login" onClick={props.onClickMovePage}>
              로그인
            </THS.Button>
            <THS.Button id="signup" onClick={props.onClickMovePage}>
              회원가입
            </THS.Button>
          </div>
        )}
        <DarkModeToggle />
      </THS.BtnWrapper>
    </THS.Wrapper>
  );
}
