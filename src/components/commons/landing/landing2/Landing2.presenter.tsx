import { useRecoilState } from "recoil";
import KakaoMapLanding from "../../../../commons/kakaomap.landing";
import { BackImgUrl } from "../../../../commons/store";
import useScrollFadeIn from "../../../../hooks/useScrollFadeIn";
import * as Ld from "./Landing2.styles";

export default function Landing2UI() {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 1, 0.1),
    2: useScrollFadeIn("up", 1, 0.3),
    3: useScrollFadeIn("up", 1, 0.4),
  };

  const [ImgUrl] = useRecoilState(BackImgUrl);

  return (
    <Ld.WrapperRoot>
      <Ld.Wrapper>
        <Ld.Rectangle></Ld.Rectangle>
        <Ld.Header {...animatedItem[0]}></Ld.Header>
        <Ld.Contents {...animatedItem[1]}></Ld.Contents>
        <Ld.MapWrapper>
          <Ld.MapBody>
            <KakaoMapLanding />
          </Ld.MapBody>
        </Ld.MapWrapper>
        <Ld.Box>
          <Ld.BoxImage {...animatedItem[2]} src={`${ImgUrl}/landingMent.svg`} />
        </Ld.Box>
      </Ld.Wrapper>
      <div {...animatedItem[3]}>
        <Ld.Footer></Ld.Footer>
      </div>
    </Ld.WrapperRoot>
  );
}
