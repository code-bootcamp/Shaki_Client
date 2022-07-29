import styled from "@emotion/styled";

const ImgWrapper = styled.div`
  position: fixed;
  top: 200px;
  left: 20px;
  z-index: 3;
  @media screen and (max-width: 1550px) {
    display: none;
  }
`;

const Img = styled.img`
  position: sticky;
  top: 104px;
  @media screen and (max-width: 1630px) {
    width: 76px;
    height: 330px;
  }
`;

export default function SideLeftPage() {
  return (
    <ImgWrapper>
      <Img src="https://storage.googleapis.com/front_image/shakiLeft.png" />
    </ImgWrapper>
  );
}
