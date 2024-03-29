import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../commons/store";

export const useLogInAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  useEffect(() => {
    if (accessToken) {
      router.push("/mypage");
    }
  }, [accessToken]);
  return <Component {...props} />;
};
