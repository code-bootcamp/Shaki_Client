import Landing2UI from "../landing2/Landing2.presenter";
import * as Ld from "./Landing1.styles";

export default function Landing1UI() {
  return (
    <Ld.WrapperRoot>
      <Ld.Wrapper />
      <Ld.Icon src="/landing/landinglogo.png"></Ld.Icon>
      <Ld.TitleHead>신개념 공유주방</Ld.TitleHead>
      <Ld.Title steps={["Sha(re) Ki(tchen)", 1500]} wrapper="p"></Ld.Title>
    </Ld.WrapperRoot>
  );
}
