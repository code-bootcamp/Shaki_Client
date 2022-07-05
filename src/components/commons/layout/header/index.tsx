import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useRouter } from "next/router";
import * as HS from "./Header.styles";

interface LinkTabProps {
  label?: string;
  href?: string;
  value?: string;
  onClick?: () => void;
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

  return (
    <HS.HeaderWrapper>
      <HS.LogoMenuWrapper>
        <HS.TitleIcon src="./logo.png" onClick={onClickHome} />
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab2 value="1" label="지점소개" />
          <LinkTab2 value="2" label="지점안내" />
          <LinkTab2 value="3" label="문의사항" />
        </Tabs>
      </HS.LogoMenuWrapper>

      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab value="4" label="로그인" onClick={onClickMoveLogin} />
        <LinkTab value="5" label="회원가입" onClick={onClickMoveSignup} />
      </Tabs>
    </HS.HeaderWrapper>
  );
}
