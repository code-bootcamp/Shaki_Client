import * as Ld from "./Landing2.styles";

export default function Landing2UI() {
  return (
    <Ld.WrapperRoot>
      <Ld.Wrapper>
        <Ld.Rectangle></Ld.Rectangle>
        <Ld.Header></Ld.Header>
        <Ld.Contents></Ld.Contents>
        <Ld.MapWrapper>
          <Ld.MapBody></Ld.MapBody>
          <Ld.Footer></Ld.Footer>
        </Ld.MapWrapper>
        <Ld.Box>
          <Ld.BoxImage src="/landing/landingMent.svg" />
        </Ld.Box>
      </Ld.Wrapper>
    </Ld.WrapperRoot>
  );
}
