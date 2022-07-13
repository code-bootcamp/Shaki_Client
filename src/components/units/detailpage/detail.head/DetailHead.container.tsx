import { Modal } from "antd";
import { useRouter } from "next/router";
import DetailHeaderUI from "./DetailHead.presenter";

export default function DetailHeadContainer() {
  const router = useRouter();

  const onClickPick = () => {
    try {
      Modal.success({ content: "찜한 정보에 추가 되었습니다!" });
    } catch (error) {
      Modal.error({ content: "찜하기에 실패하셨습니다." });
    }
  };

  const onClickRoomMove = (e: any) => {
    router.push(`/${e.target.id}`);
  };
  return (
    <DetailHeaderUI
      router={router}
      onClickPick={onClickPick}
      onClickRoomMove={onClickRoomMove}
    />
  );
}
