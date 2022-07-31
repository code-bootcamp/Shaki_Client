import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import HeaderUI from "./Header.presenter";
import {
  FETCH_BRANCHES,
  FETCH_LOGIN_USER,
  FETCH_ROOM,
  LOG_OUT,
} from "./Header.queries";

export default function HeaderContainer() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const client = useApolloClient();
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

  const onClickMoveDetail =
    (el: any) => async (event: React.MouseEvent<HTMLDivElement>) => {
      // router.push(`/detailpage/${(event.target as HTMLDivElement).id}`);
      console.log(el);
      const detail = await client.query({
        query: FETCH_ROOM,
        variables: {
          id: el.id,
        },
      });
      const data = detail.data.fetchRoom;
      console.log(data);

      const today = JSON.parse(sessionStorage.getItem("today") || "[]");
      const temp = today.filter((todayEl: any) => todayEl.id === data.id);

      if (temp.length > 0) {
        router.push(`/detailpage/${data.id}`);
      } else {
        const { __typename, ...newEL } = data;
        today.unshift(newEL);
        sessionStorage.setItem("today", JSON.stringify(today));
        router.push(`/detailpage/${data.id}`);
      }
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
