import * as DH from "./DetailHead.styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { Rating } from "@mui/material";

interface LinkTabProps {
  label?: string;
  href?: string;
  value?: string;
  id?: string;
  onClick?: (e: any) => void;
  style: { fontWeight: string; fontSize: string };
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

interface IDetailHeaderUI {
  onClickPick: () => void;
}

export default function DetailHeaderUI(props: IDetailHeaderUI) {
  const [value, setValue] = useState("");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <DH.Wrapper>
      <DH.MenuWrapper>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          variant="fullWidth"
        >
          <LinkTab
            label="구로점 쉐이키 1"
            value="1"
            style={{ fontWeight: "700", fontSize: "22" }}
          />
          <LinkTab
            label="구로점 쉐이키 2"
            value="2"
            style={{ fontWeight: "700", fontSize: "22" }}
          />
          <LinkTab
            label="구로점 쉐이키 3"
            value="6"
            style={{ fontWeight: "700", fontSize: "22" }}
          />
        </Tabs>
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
