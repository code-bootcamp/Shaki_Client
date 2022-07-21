import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BRANCHES } from "./Main.queries";
import MainPresenter from "./Main.Presenter";

export default function MainContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BRANCHES);

  const onClickRoom = (e: any) => {
    router.push(`/detailpage/${e.currentTarget.id}`);
  };
  return <MainPresenter data={data} onClickRoom={onClickRoom} />;
}
