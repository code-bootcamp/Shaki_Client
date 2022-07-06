import styled from "@emotion/styled";

const ImgWrapper = styled.div`
  margin-right: 80px;
`;

const Img = styled.img`
  position: sticky;
  top: 800px;
`;

export default function SideRightPage() {
  return (
    <ImgWrapper>
      <Img src="./sideImg/shakiRight.png" />
    </ImgWrapper>
  );
}
