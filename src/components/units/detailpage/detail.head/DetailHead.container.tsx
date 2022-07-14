import { useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import DetailHeaderUI from "./DetailHead.presenter";
import { FETCH_BRANCHES } from "./DetailHead.queries";

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

export default function DetailHeadContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BRANCHES);

  let Rooms: any[] | undefined = [];

  if (data) {
    Rooms = RoomArray(data.fetchBranches, router.asPath);
  }
  // 찜하기
  const onClickPick = () => {
    try {
      Modal.success({ content: "찜한 정보에 추가 되었습니다!" });
    } catch (error) {
      Modal.error({ content: "찜하기에 실패하셨습니다." });
    }
  };
  // 라우터
  const onClickRoomMove = (e: any) => {
    router.push(`/${e.target.id}`);
  };

  return (
    <DetailHeaderUI
      router={router}
      onClickPick={onClickPick}
      onClickRoomMove={onClickRoomMove}
      data={data}
      Rooms={Rooms}
    />
  );
}
