import { Rate } from "antd";
import * as DH from "./DetailHead.styles";

interface IDetailHeaderUI {
  onClickPick: () => void;
  onClickRoomMove: (e: any) => void;
  router: any;
  data: any;
  Rooms: any;
}

export default function DetailHeaderUI(props: IDetailHeaderUI) {
  return (
    <DH.Wrapper>
      <DH.MenuWrapper>
        {props.Rooms[0]?.map((el: any, i: number) => (
          <DH.MenuName
            onClick={props.onClickRoomMove}
            isPosition={props.router.asPath.split("/")[1]}
            id={el}
            key={i}
          >
            쉐이키{i + 1}
          </DH.MenuName>
        ))}
      </DH.MenuWrapper>
      <DH.HeadInfoWrapper>
        <DH.HeadInfo>
          {/* 별점 Fetch 받아온값 연결해야함. value*/}
          <Rate />
          0.0/ 5.0
        </DH.HeadInfo>

        <DH.PickWrapper>
          <DH.PickImg src="/mypage/pick_detail.png" />
          <DH.QuestionBtn onClick={props.onClickPick}>찜하기</DH.QuestionBtn>
        </DH.PickWrapper>
      </DH.HeadInfoWrapper>
      <DH.ExImgBox>
        <DH.ExImgTitle src="./logo.png" />
        <DH.ExImgWrapper>
          <DH.ExImg src="./logo.png" />
          <DH.ExImg src="./logo.png" />
          <DH.ExImg src="./logo.png" />
          <DH.ExImg src="./logo.png" />
        </DH.ExImgWrapper>
      </DH.ExImgBox>
    </DH.Wrapper>
  );
}
