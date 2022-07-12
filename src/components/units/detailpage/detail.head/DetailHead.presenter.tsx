import * as DH from "./DetailHead.styles";
import { Rating } from "@mui/material";

interface IDetailHeaderUI {
  onClickPick: () => void;
}

export default function DetailHeaderUI(props: IDetailHeaderUI) {
  const data = [
    {
      id: "0ea15360-7477-48ff-ab0b-97c9e9884fce",
      name: "1번방",
    },
    {
      id: "0ea15360-7477-48ff-ab0b-97c9e9884fce",
      name: "2번방",
    },
    {
      id: "0ea15360-7477-48ff-ab0b-97c9e9884fce",
      name: "3번방",
    },
  ];

  return (
    <DH.Wrapper>
      <DH.MenuWrapper>
        {data.map((el) => (
          <DH.MenuName>{el.name}</DH.MenuName>
        ))}
      </DH.MenuWrapper>
      {/* 별점 태그 문의하기 */}
      <DH.HeadInfoWrapper>
        <DH.HeadInfo>
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
