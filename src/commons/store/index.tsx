// 전역변수 들어갈 곳입니다. = useRecoil

import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});
