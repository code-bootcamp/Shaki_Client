import useScrollFadeIn from "../../../../hooks/useScrollFadeIn";
import * as Ld from "./Landing2.styles";

export default function Landing2UI() {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 1, 0.1),
    2: useScrollFadeIn("up", 1, 0.3),
    3: useScrollFadeIn("up", 1, 0.4),
  };

  return (
    <Ld.WrapperRoot>
      <Ld.Wrapper>
        <Ld.Rectangle></Ld.Rectangle>
        <Ld.Header {...animatedItem[0]}></Ld.Header>
        <Ld.Contents {...animatedItem[1]}></Ld.Contents>
        <Ld.MapWrapper>
          <Ld.MapBody></Ld.MapBody>
        </Ld.MapWrapper>
        <Ld.Box>
          <Ld.BoxImage {...animatedItem[2]} src="/landing/landingMent.svg" />
        </Ld.Box>
      </Ld.Wrapper>
      <Ld.Footer {...animatedItem[3]}></Ld.Footer>
    </Ld.WrapperRoot>
  );
}
