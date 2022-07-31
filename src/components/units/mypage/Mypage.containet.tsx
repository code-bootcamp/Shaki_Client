import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { useAuth } from "../../../hooks/useAuth";
import MypageUI from "./Mypage.presenter";
import { USER_INFO } from "./Mypage.query";

function Mypage() {
  const router = useRouter();
  const { data } = useQuery(USER_INFO);

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [today, setToday] = useState([]);
  console.log(accessToken);
  console.log(data);
  const onClickMoveDetail = (event: React.MouseEvent<HTMLDivElement>) => {
    router.push(`/detailpage/${(event.currentTarget as HTMLDivElement).id}`);
  };

  useEffect(() => {
    const today = JSON.parse(sessionStorage.getItem("today") || "[]");
    setToday(today);
    console.log("today", today);
  }, []);

  return (
    <MypageUI data={data} today={today} onClickMoveDetail={onClickMoveDetail} />
  );
}

export default useAuth(Mypage);
