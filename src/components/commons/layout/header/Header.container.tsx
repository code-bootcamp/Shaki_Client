import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import HeaderUI from "./Header.presenter";
import { FETCH_BRANCHES, FETCH_LOGIN_USER, LOG_OUT } from "./Header.queries";

export default function HeaderContainer() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [logOutUser] = useMutation(LOG_OUT);
  const { data } = useQuery(FETCH_LOGIN_USER);
  const { data: dataFetchBranches } = useQuery(FETCH_BRANCHES);

  const router = useRouter();

  const onClickLogOut = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      await logOutUser();
      setAccessToken("");
      alert("로그아웃성공");
      sessionStorage.clear();
      router.push("/login");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const onClickMovePage = (e: any) => {
    router.push(`/${e.target.id}`);
  };

  const onClickMoveDetail = (e: any) => {
    router.push(`/detailpage/${e.target.id}`);
  };

  return (
    <>
      <HeaderUI
        onClickMovePage={onClickMovePage}
        onClickMoveDetail={onClickMoveDetail}
        onClickLogOut={onClickLogOut}
        accessToken={accessToken}
        data={data}
        dataFetchBranches={dataFetchBranches}
        router={router}
      />
    </>
  );
}
