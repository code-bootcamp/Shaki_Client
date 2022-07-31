import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BRANCHES } from "./Main.queries";
import MainPresenter from "./Main.Presenter";
import React from "react";

export default function MainContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BRANCHES);

  console.log(data);

  const onClickRoom =
    (el: any) => (event: React.MouseEvent<HTMLDivElement>) => {
      const today = JSON.parse(sessionStorage.getItem("today") || "[]");
      const temp = today.filter((todayEl: any) => todayEl.id === el.id);
      console.log(today, temp);

      if (temp.length > 0) {
        router.push(`/detailpage/${event.currentTarget.id}`);
      } else {
        const { __typename, ...newEL } = el;
        today.unshift(newEL);
        sessionStorage.setItem("today", JSON.stringify(today));
        router.push(`/detailpage/${event.currentTarget.id}`);
      }

      // router.push(`/detailpage/${event.currentTarget.id}`);
    };
  return <MainPresenter data={data} onClickRoom={onClickRoom} />;
}
