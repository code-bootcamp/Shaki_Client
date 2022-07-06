import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useRouter } from "next/router";
import * as HS from "./Header.styles";

interface LinkTabProps {
  label?: string;
  href?: string;
  value?: string;
  id?: string;
  onClick?: (e: any) => void;
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

function LinkTab2(props: LinkTabProps) {
  return (
    <Tab
      component="b"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState("");
  const router = useRouter();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const onClickMoveLogin = () => {
    router.push("/login");
  };

  const onClickMoveSignup = () => {
    router.push("/signup");
  };

  const onClickHome = () => {
    router.push("/");
  };

  const onClickMovePage = (e: any) => {
    router.push(`/${e.target.id}`);
  };

  return (
    <HS.HeaderWrapper>
      <HS.LogoMenuWrapper>
        <HS.TitleIcon src="./logo.png" onClick={onClickHome} />
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab2
            label="지점소개"
            value="1"
            id="mainpage"
            onClick={onClickMovePage}
          />
          <LinkTab2
            label="지점안내"
            value="2"
            id="detailpage"
            onClick={onClickMovePage}
          />
          <LinkTab2
            label="문의사항"
            value="3"
            id="mypage"
            onClick={onClickMovePage}
          />
        </Tabs>
      </HS.LogoMenuWrapper>

      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label="로그인" value="4" onClick={onClickMoveLogin} />
        <LinkTab label="회원가입" value="5" onClick={onClickMoveSignup} />
      </Tabs>
    </HS.HeaderWrapper>
  );
}
