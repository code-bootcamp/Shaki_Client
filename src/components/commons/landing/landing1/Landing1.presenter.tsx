import { useRouter } from "next/router";
import Landing2UI from "../landing2/Landing2.presenter";
import * as Ld from "./Landing1.styles";

export default function Landing1UI() {
  const router = useRouter();
  const onClickMoveMain = () => {
    router.push("/main");
  };
  return (
    <Ld.WrapperRoot>
      <Ld.Wrapper />
      <Ld.Icon
        onClick={onClickMoveMain}
        src="/landing/landinglogo.png"
      ></Ld.Icon>
      <Ld.TitleWrapper>
        <Ld.TitleHead>신개념 공유주방</Ld.TitleHead>
        <Ld.Title steps={["Sha(re) Ki(tchen)", 1500]} wrapper="p"></Ld.Title>
      </Ld.TitleWrapper>
    </Ld.WrapperRoot>
  );
}
