import styled from "@emotion/styled";

const ImgWrapper = styled.div`
  margin-top: 20px;
  margin-left: 80px;
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
