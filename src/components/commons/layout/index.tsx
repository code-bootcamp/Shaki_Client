import BannerPage from "./banner";
import FooterPage from "./footer";
import HeaderPage from "./header";
import NavigationPage from "./navigation";
import styled from "@emotion/styled";
import { ReactNode } from "react";

const Body = styled.div`
  width: 100%;
`;

interface LayoutProps {
  children: ReactNode;
}
export default function LayoutPage(props: LayoutProps) {
  return (
    <div>
      <HeaderPage />
      {/* <BannerPage /> */}
      {/* <NavigationPage /> */}
      <Body>{props.children}</Body>
      <FooterPage />
    </div>
  );
}
