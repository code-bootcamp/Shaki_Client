import { Rate } from "antd";
import { useContext } from "react";
import { ThemeContext } from "../../../../../pages/_app";
import * as DH from "./DetailHead.styles";

// data 타입잡기
interface IDetailHeaderUI {
  onClickPick: () => void;
  data: any;
}

export default function DetailHeaderUI(props: IDetailHeaderUI) {
  const { theme } = useContext(ThemeContext);
  return (
    <DH.Wrapper theme={theme}>
      <DH.HeadInfoWrapper>
        <DH.HeadInfo>
          {/* 별점 Fetch 받아온값 연결해야함. value*/}
          <Rate disabled value={props.data?.fetchRoom.star} />
          <DH.HeadStar>{props.data?.fetchRoom.star}</DH.HeadStar>
        </DH.HeadInfo>

        <DH.PickWrapper>
          <DH.PickImg src="/mypage/pick_detail.png" />
          <DH.QuestionBtn onClick={props.onClickPick}>찜하기</DH.QuestionBtn>
        </DH.PickWrapper>
      </DH.HeadInfoWrapper>
      <DH.ExImgBox>
        <DH.ExImgTitle src={props.data?.fetchRoom.images[0].url} />
        <DH.ExImgWrapper>
          {props.data?.fetchRoom.images
            .filter((el: any, i: number) => i !== 0)
            .map((el: any, i: number) => (
              <div key={i}>
                <DH.ExImg src={el.url} />
              </div>
            ))}
        </DH.ExImgWrapper>
      </DH.ExImgBox>
    </DH.Wrapper>
  );
}
