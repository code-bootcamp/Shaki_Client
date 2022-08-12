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
  const [point, setPoint] = useState(0);
  const onClickMoveDetail = (event: React.MouseEvent<HTMLDivElement>) => {
    router.push(`/detailpage/${(event.currentTarget as HTMLDivElement).id}`);
  };

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < data?.fetchLoginUser.payment.length; i++) {
      sum += data.fetchLoginUser.payment[i].point;
    }
    setPoint(sum);
    const today = JSON.parse(sessionStorage.getItem("today") || "[]");
    setToday(today);
    console.log(point);
  }, [data]);

  return (
    <MypageUI
      point={point}
      data={data}
      today={today}
      onClickMoveDetail={onClickMoveDetail}
    />
  );
}

export default useAuth(Mypage);
