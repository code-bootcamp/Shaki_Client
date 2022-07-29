import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { adminAuthState } from "../commons/store";

export const useAdminAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  const [adminAuth, setAdminAuth] = useRecoilState(adminAuthState);

  useEffect(() => {
    if (sessionStorage.getItem("admin") !== "true") {
      alert("관리자 권한이 필요합니다.");
      router.push("/mypage");
    }
  }, []);
  return <Component {...props} />;
};
