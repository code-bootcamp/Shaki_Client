import styled from "@emotion/styled";

const ImgWrapper = styled.div`
  position: fixed;
  bottom: 100px;
  right: 20px;
  z-index: 3;
  @media screen and (max-width: 1500px) {
    display: none;
  }
`;

const Img = styled.img`
  position: sticky;
  top: 1000px;
  @media screen and (max-width: 1630px) {
    width: 76px;
    height: 330px;
  }
`;

export default function SideRightPage() {
  return (
    <ImgWrapper>
      <Img src="./sideImg/shakiRight.png" />
    </ImgWrapper>
  );
}
