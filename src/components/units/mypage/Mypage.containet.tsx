import { useQuery } from "@apollo/client";
import { useAuth } from "../../../hooks/useAuth";
import MypageUI from "./Mypage.presenter";
import { USER_INFO } from "./Mypage.query";

function Mypage() {
  const { data } = useQuery(USER_INFO);
  console.log("123123", data);

  return <MypageUI data={data} />;
}

export default useAuth(Mypage);
