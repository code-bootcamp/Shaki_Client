import { useContext } from "react";
import { useRecoilState } from "recoil";
import { ThemeContext } from "../../../../../pages/_app";
import { BackImgUrl } from "../../../../commons/store";
import * as FT from "./Footer.styles";

export default function FooterPage() {
  const { theme } = useContext(ThemeContext);
  const [ImgUrl] = useRecoilState(BackImgUrl);
  return (
    <FT.FooterWrapper theme={theme}>
      <FT.LogoImg src={`${ImgUrl}/logo.png`} />
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
