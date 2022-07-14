import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import DetailNavUI from "./DetailNavigation.presenter";
import { FETCH_BRANCHES } from "./DetailNavigation.queries";

function RoomArray(data: any, asPath: any) {
  let result: any[] = [];
  for (let i = 0; i < data.length; i++) {
    const answer = data[i].branch.idAll.split(",");
    for (let j = 0; j < answer.length; j++) {
      if (asPath.slice(1, asPath.length) == answer[j]) {
        result.push(answer);
        return result;
      }
    }
  }
  console.log("RoomArray함수실패!");
}

export default function DetailNavContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BRANCHES);

  let Rooms: any[] | undefined = [];

  if (data) {
    Rooms = RoomArray(data.fetchBranches, router.asPath);
  }

  const onClickRoomMove = (e: any) => {
    router.push(`/${e.target.id}`);
  };

  return (
    <DetailNavUI
      data={data}
      Rooms={Rooms}
      router={router}
      onClickRoomMove={onClickRoomMove}
    />
  );
}
