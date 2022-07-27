import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BRANCHES } from "./Main.queries";
import MainPresenter from "./Main.Presenter";
import React from "react";

export default function MainContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BRANCHES);

  console.log(data);

  const onClickRoom = (event: React.MouseEvent<HTMLDivElement>) => {
    router.push(`/detailpage/${event.currentTarget.id}`);
  };
  return <MainPresenter data={data} onClickRoom={onClickRoom} />;
}
