import styled from "@emotion/styled";

const ImgWrapper = styled.div`
  position: fixed;
  top: 104px;
  left: 20px;
  z-index: 3;
  @media screen and (max-width: 1630px) {
    display: none;
  }
`;

const Img = styled.img`
  position: sticky;
  top: 104px;
`;

export default function SideLeftPage() {
  return (
    <ImgWrapper>
      <Img src="./sideImg/shakiLeft.png" />
    </ImgWrapper>
  );
}
