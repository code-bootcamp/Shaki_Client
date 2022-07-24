import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../commons/library/getAccessToken";
import { accessTokenState } from "../commons/store";

export const useAuth = (Component) => (props) => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  useEffect(() => {
    if (!accessToken) {
      getAccessToken().then((newAccessToken) => {
        if (!newAccessToken) {
          alert("로그인 후 사용해주세요");
          router.push("/login");
        }
        setAccessToken(newAccessToken);
      });
    }
  }, []);
  return <Component {...props} />;
};
