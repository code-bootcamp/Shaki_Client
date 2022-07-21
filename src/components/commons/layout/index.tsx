import FooterPage from "./footer";
import HeaderPage from "./header/Header.container";
// 사이드
import SideLeftPage from "./sidebar.left";
import SideRightPage from "./sidebar.right";
import { ReactNode, useContext } from "react";
import { useRouter } from "next/router";
import ChatBox from "../../../commons/chatbot/ChatBot";
import * as LS from "./styles";
import { ThemeContext } from "../../../../pages/_app";

interface LayoutProps {
  children: ReactNode;
}

const HIDDEN_LAYOUT = ["/", "/faqadmin"];
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

  const { theme } = useContext(ThemeContext);

  return (
    <div>
      {!isHiddenLayout && <HeaderPage />}
      <LS.PageWrapper theme={theme}>
        {!isHiddenSidebar && <SideLeftPage />}
        <LS.Body>{props.children}</LS.Body>
        {!isHiddenSidebar && <SideRightPage />}
      </LS.PageWrapper>
      {!isHiddenLayout && <ChatBox />}

      <LS.FooterWrapper>{!isHiddenLayout && <FooterPage />}</LS.FooterWrapper>
    </div>
  );
}
