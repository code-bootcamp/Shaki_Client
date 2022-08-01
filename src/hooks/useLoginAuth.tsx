import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../commons/store";

export const useLogInAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  useEffect(() => {
    if (accessToken) {
      alert("이미 로그인 상태입니다. 마이페이지로 이동합니다.");
      router.push("/mypage");
    }
  }, [accessToken]);
  return <Component {...props} />;
};
