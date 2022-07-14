import { useRouter } from "next/router";
import * as THS from "./Header.styles";

interface IHeaderType {
  onClickLogOut: (event: React.MouseEvent<HTMLButtonElement>) => void;
  accessToken: string;
  data: {
    fetchLoginUser: {
      email: string;
      name: string;
    };
  };
}

export default function HeaderUI(props: IHeaderType) {
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
        {props.accessToken ? (
          <div style={{ display: "flex" }}>
            <p>{props.data?.fetchLoginUser.name}님 환영합니다!</p>
            <THS.Button id="logOut" onClick={props.onClickLogOut}>
              로그아웃
            </THS.Button>
          </div>
        ) : (
          <div>
            <THS.Button id="login" onClick={onClickMovePage}>
              로그인
            </THS.Button>
            <THS.Button id="signup" onClick={onClickMovePage}>
              회원가입
            </THS.Button>
          </div>
        )}
      </THS.BtnWrapper>
    </THS.Wrapper>
  );
}
