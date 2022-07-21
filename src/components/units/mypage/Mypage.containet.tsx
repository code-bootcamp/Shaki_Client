import { useQuery } from "@apollo/client";
import MypageUI from "./Mypage.presenter";
import { USER_INFO } from "./Mypage.query";

export default function Mypage() {
  const { data } = useQuery(USER_INFO);
  console.log(data);
  return <MypageUI data={data} />;
}
