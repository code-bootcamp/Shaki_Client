import { Modal } from "antd";
import DetailHeaderUI from "./DetailHead.presenter";

interface IRoom {
  data: {
    star: Number;
    images: {
      url: string;
    };
  };
}

export default function DetailHeadContainer(props: IRoom) {
  // 찜하기
  const onClickPick = () => {
    try {
      Modal.success({ content: "찜한 정보에 추가 되었습니다!" });
    } catch (error) {
      Modal.error({ content: "찜하기에 실패하셨습니다." });
    }
  };

  return <DetailHeaderUI onClickPick={onClickPick} data={props.data} />;
}
