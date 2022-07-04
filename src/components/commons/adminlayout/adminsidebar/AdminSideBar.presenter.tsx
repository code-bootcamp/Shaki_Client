import * as AD from "./AdminSideBar.styles";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import CommentIcon from "@mui/icons-material/Comment";
import React from "react";

export default function AdminSideBarUI() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <AD.Wrapper>
      <AD.HeadWrapper>
        <AD.ImageWrapper>
          <AD.Image src="/admin.png" />
        </AD.ImageWrapper>
        <AD.HeadTitleWrapper>
          <AD.HeadTitle>MASTER</AD.HeadTitle>
        </AD.HeadTitleWrapper>
      </AD.HeadWrapper>
      <List>
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="관리자 페이지" />
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <AllInboxIcon />
          </ListItemIcon>
          <ListItemText primary="예약/문의 내역" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <ControlPointIcon />
          </ListItemIcon>
          <ListItemText primary="가맹점 등록하기" />
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <CommentIcon />
          </ListItemIcon>
          <ListItemText primary="문의 답변 보내기" />
        </ListItemButton>
      </List>
      <Divider />
    </AD.Wrapper>
  );
}
