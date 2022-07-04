import FooterPage from "./footer";
import HeaderPage from "./header";
// import BannerPage from "./banner";
// import NavigationPage from "./navigation";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const Body = styled.div`
  width: 100%;
`;

interface LayoutProps {
  children: ReactNode;
}
// 레이아웃 예외처리
const HIDDEN_LAYOUT = ["/"];

function EditBoolean(element: any) {
  const a = element.split("/");
  for (let i = 0; i < a.length; i++) {
    // 관리자 페이지 예외처리 : #
    if (a[i].includes("#")) {
      HIDDEN_LAYOUT.push(element);
    }
  }
}
export default function LayoutPage(props: LayoutProps) {
  const router = useRouter();
  EditBoolean(router.asPath);
  const isHiddenLayout = HIDDEN_LAYOUT.includes(router.asPath);

  return (
    <div>
      {!isHiddenLayout && <HeaderPage />}
      {/* <BannerPage /> */}
      {/* <NavigationPage /> */}
      <Body>{props.children}</Body>
      {!isHiddenLayout && <FooterPage />}
    </div>
  );
}
