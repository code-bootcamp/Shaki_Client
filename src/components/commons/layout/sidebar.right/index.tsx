import styled from "@emotion/styled";

const ImgWrapper = styled.div`
  position: fixed;
  bottom: 100px;
  right: 20px;
  z-index: 3;
  @media screen and (max-width: 1550px) {
    display: none;
  }
`;

const Img = styled.img`
  /* top: 1000px; */
  @media screen and (max-width: 1630px) {
    width: 76px;
    height: 330px;
  }
`;

export default function SideRightPage() {
  return (
    <ImgWrapper>
      <Img src="https://storage.googleapis.com/front_image/shakiRight.png" />
    </ImgWrapper>
  );
}
