import { useApolloClient, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import DetailNavUI from "./DetailNavigation.presenter";
import { FETCH_BRANCHES, FETCH_ROOM } from "./DetailNavigation.queries";

export default function DetailNavContainer() {
  const router = useRouter();
  const client = useApolloClient();
  const { data, loading } = useQuery(FETCH_BRANCHES);

  const onClickRoomMove =
    (el: any) => async (event: React.MouseEvent<HTMLDivElement>) => {
      // router.push(`/detailpage/${(event.target as HTMLDivElement).id}`);
      console.log(el);
      const detail = await client.query({
        query: FETCH_ROOM,
        variables: {
          id: el,
        },
      });
      const data = detail.data.fetchRoom;
      console.log(data);

      const today = JSON.parse(sessionStorage.getItem("today") || "[]");
      const temp = today.filter((todayEl: any) => todayEl.id === data.id);

      if (temp.length > 0) {
        router.push(`/detailpage/${data.id}`);
      } else {
        const { __typename, ...newEL } = data;
        today.unshift(newEL);
        sessionStorage.setItem("today", JSON.stringify(today));
        router.push(`/detailpage/${data.id}`);
      }
    };

  // 데이터를 받아올떄까지 Loading함수로 기다리기.
  return (
    <>
      {loading ? (
        <></>
      ) : (
        <DetailNavUI
          data={data}
          router={router}
          onClickRoomMove={onClickRoomMove}
        />
      )}
    </>
  );
}
