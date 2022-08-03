import { useRouter } from "next/router";
import * as Lm from "./LandingMobile.styles";

export default function LandingMobile() {
  const router = useRouter();
  const onClickLogin = () => {
    router.push("/login");
  };
  return (
    <Lm.HTML>
      <Lm.Root>
        <Lm.Title>
          신개념 공유주방 <br></br> Sha⌜re⌟ Ki⌜tchen⌟
        </Lm.Title>
      </Lm.Root>
      <Lm.Body />
      <Lm.Footer />
      <Lm.Button onClick={onClickLogin}>로그인 페이지 이동</Lm.Button>
    </Lm.HTML>
  );
}
