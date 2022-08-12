import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { BackImgUrl } from "../../../../commons/store";

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
  const [ImgUrl] = useRecoilState(BackImgUrl);
  return (
    <ImgWrapper>
      <Img src={`${ImgUrl}/shakiRight.png`} />
    </ImgWrapper>
  );
}
