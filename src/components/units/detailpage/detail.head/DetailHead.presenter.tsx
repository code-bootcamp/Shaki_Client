import * as DH from "./DetailHead.styles";
import { Rating } from "@mui/material";

interface IDetailHeaderUI {
  onClickPick: () => void;
  onClickRoomMove: (e: any) => void;
  router: any;
}

export default function DetailHeaderUI(props: IDetailHeaderUI) {
  const data = [
    {
      id: "0ea15360-7477-48ff-ab0b-97c9e9884fce",
      name: "1번방",
    },
    {
      id: "0ea15360-7477-48ff-ab0b-97c9e9884fce2",
      name: "2번방",
    },
    {
      id: "0ea15360-7477-48ff-ab0b-97c9e9884fce3",
      name: "3번방",
    },
  ];
  return (
    <DH.Wrapper>
      <DH.MenuWrapper>
        {data.map((el, i) => (
          <DH.MenuName
            onClick={props.onClickRoomMove}
            isPosition={props.router.asPath.split("/")[1]}
            id={el.id}
            key={i}
          >
            {el.name}
          </DH.MenuName>
        ))}
      </DH.MenuWrapper>
      <DH.HeadInfoWrapper>
        <DH.HeadInfo>
          {/* 별점 Fetch 받아온값 연결해야함. */}
          <Rating size="large" />
          4.0/ 5.0
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
