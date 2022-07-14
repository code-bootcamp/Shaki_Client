import LogInPresenter from "./LogIn.Presenter";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOG_IN } from "./LogIn.Mutation";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

const schema = yup.object({
  email: yup.string().required(),
  pwd: yup.string().required(),
});

export default function LogInContainer() {
  const { handleSubmit, formState, register } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [logInUser] = useMutation(LOG_IN);
  const [adminOn, setAdminOn] = useState(false);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const onClickAdmin = (event: React.MouseEvent<HTMLDivElement>) => {
    setAdminOn((prev) => !prev);
  };

  const onClickLogIn = async (data: any) => {
    try {
      const result = await logInUser({
        variables: {
          email: data.email,
          pwd: data.pwd,
        },
      });
      const accessToken = result.data.login;
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
      router.push("/mypage");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const onClickKakaoLogIn = () => {
    router.push("https://shakiback.shop/login/kakao");
  };

  const onClickGoogleLogIn = () => {
    router.push("https://shakiback.shop/login/google");
  };

  const onClickNaverLogIn = () => {
    router.push("https://shakiback.shop/login/naver");
  };

  const router = useRouter();
  const onClickMoveToSignUp = (event: React.MouseEvent<HTMLDivElement>) => {
    router.push("/signup");
  };
  const onClickMoveToMain = () => {
    router.push("/main");
  };
  return (
    <LogInPresenter
      handleSubmit={handleSubmit}
      formState={formState}
      register={register}
      onClickMoveToSignUp={onClickMoveToSignUp}
      onClickMoveToMain={onClickMoveToMain}
      onClickLogIn={onClickLogIn}
      onClickKakaoLogIn={onClickKakaoLogIn}
      onClickAdmin={onClickAdmin}
      adminOn={adminOn}
      onClickNaverLogIn={onClickNaverLogIn}
      onClickGoogleLogIn={onClickGoogleLogIn}
    />
  );
}
