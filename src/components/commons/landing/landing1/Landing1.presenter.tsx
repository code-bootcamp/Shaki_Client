import { useRecoilState } from "recoil";
import { BackImgUrl } from "../../../../commons/store";
import * as Ld from "./Landing1.styles";

export default function Landing1UI() {
  const [ImgUrl] = useRecoilState(BackImgUrl);

  return (
    <Ld.WrapperRoot>
      <Ld.Wrapper />
      <Ld.Icon src={`${ImgUrl}/landinglogo.png`}></Ld.Icon>
      <Ld.TitleWrapper>
        <Ld.TitleHead>신개념 공유주방</Ld.TitleHead>
        <Ld.Title steps={["Sha(re) Ki(tchen)", 1500]} wrapper="p"></Ld.Title>
      </Ld.TitleWrapper>
    </Ld.WrapperRoot>
  );
}
