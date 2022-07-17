import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import DetailNavUI from "./DetailNavigation.presenter";
import { FETCH_BRANCHES } from "./DetailNavigation.queries";

export default function DetailNavContainer() {
  const router = useRouter();
  const { data, loading } = useQuery(FETCH_BRANCHES);

  const onClickRoomMove = (e: any) => {
    router.push(`/${e.target.id}`);
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
