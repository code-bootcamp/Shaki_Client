// 전역변수 들어갈 곳입니다. = useRecoil
import { v1 } from "uuid";

import { atom } from "recoil";

export const accessTokenState = atom({
  key: `accessTokenState/${v1()}`,
  default: "",
});

export const voiceOnState = atom({
  key: `voiceOnstate/${v1()}`,
  default: false,
});
