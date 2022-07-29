import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { useAuth } from "../../../hooks/useAuth";
import MypageUI from "./Mypage.presenter";
import { USER_INFO } from "./Mypage.query";

function Mypage() {
  const { data } = useQuery(USER_INFO);
  console.log(data);

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  console.log(accessToken);

  return <MypageUI data={data} />;
}

export default useAuth(Mypage);
