import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import HeaderUI from "./Header.presenter";
import { LOG_OUT } from "./Header.queries";

export default function HeaderContainer() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [logOutUser] = useMutation(LOG_OUT);
  const router = useRouter();

  const onClickLogOut = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      await logOutUser;
      setAccessToken("");
      localStorage.clear();
      console.log(accessToken);
      alert("로그아웃성공");
      router.push("/login");
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <>
      <HeaderUI onClickLogOut={onClickLogOut} accessToken={accessToken} />
    </>
  );
}