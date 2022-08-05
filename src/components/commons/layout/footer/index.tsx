import { useContext } from "react";
import { ThemeContext } from "../../../../../pages/_app";
import * as FT from "./Footer.styles";

export default function FooterPage() {
  const { theme } = useContext(ThemeContext);
  return (
    <FT.FooterWrapper theme={theme}>
      <FT.LogoImg src="https://storage.googleapis.com/front_image/logo.png" />
      <FT.TextInfo>
        주식회사 쉐이키
        <FT.HeightLine>|</FT.HeightLine>
        대표자 : 이승훈
      </FT.TextInfo>
      <FT.TextInfo>
        사업자등록번호 : 123-12-00012
        <FT.HeightLine>|</FT.HeightLine>
        전화번호 : 010-0000-0000
      </FT.TextInfo>

      <FT.TextInfo>© ShaKi. All rights reserved.</FT.TextInfo>
    </FT.FooterWrapper>
  );
}
