import FooterPage from "./footer";
import HeaderPage from "./header";
// 사이드
import SideLeftPage from "./sidebar.left";
import SideRightPage from "./sidebar.right";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import ChatBox from "../../units/livechat/chatbox/ChatBox.container";

const Body = styled.div`
  width: 100%;
`;
// 사이드
const PageWrapper = styled.div`
  /* display: flex; */
  flex-direction: row;
  position: sticky;
`;

const FooterWrapper = styled.div`
  display: flex;
  position: sticky;
`;

interface LayoutProps {
  children: ReactNode;
}

const HIDDEN_LAYOUT = ["/"];
const HIDDEN_SIDEBAR: Array<string> = [];
// 예외처리 함수
function EditBoolean(element: any) {
  const a = element.split("/");
  for (let i = 0; i < a.length; i++) {
    if (a[i].includes("adminpage")) {
      HIDDEN_LAYOUT.push(element);
      HIDDEN_SIDEBAR.push(element);
    }
  }
}

export default function LayoutPage(props: LayoutProps) {
  const router = useRouter();
  EditBoolean(router.asPath);
  const isHiddenLayout = HIDDEN_LAYOUT.includes(router.asPath);
  const isHiddenSidebar = HIDDEN_SIDEBAR.includes(router.asPath);

  return (
    <div>
      {!isHiddenLayout && <HeaderPage />}
      <PageWrapper>
        {!isHiddenSidebar && <SideLeftPage />}
        <Body>{props.children}</Body>
        {!isHiddenSidebar && <SideRightPage />}
      </PageWrapper>
      {!isHiddenLayout && <ChatBox />}

      <FooterWrapper>{!isHiddenLayout && <FooterPage />}</FooterWrapper>
    </div>
  );
}
