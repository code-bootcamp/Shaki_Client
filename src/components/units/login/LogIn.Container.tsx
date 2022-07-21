import LogInPresenter from "./LogIn.Presenter";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { LOG_IN } from "./LogIn.Mutation";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import Head from "next/head";

const schema = yup.object({
  email: yup.string().required(),
  pwd: yup.string().required(),
});

declare const window: typeof globalThis & {
  kakao: any;
};

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
  // const code = new URL(window.location.href).searchParams.get("code");

  // 357c3087451d43e05fe837f631665a97 :js
  // d4b0ea05b2e0d0c11fdc75bfa0c9aef6 :restAPI

  // const kakoLogIn = () => {
  //   window.Kakao.Auth.login({
  //     success: () => {
  //       window.Kakao.API.request({
  //         url: "/v2/user/me",
  //         data: {
  //           property_keys: ["kakao_account.email"],
  //         },
  //         success: function (response: { kakao_account: { email: any } }) {
  //           console.log(response);
  //           router.push("/main");
  //         },
  //         fail: function (error) {
  //           console.log("에러남");
  //         },
  //       });
  //     },
  //     fail: function (error) {
  //       console.log("에러");
  //     },
  //   });
  // };

  return (
    <>
      <Head></Head>
      <LogInPresenter
        handleSubmit={handleSubmit}
        formState={formState}
        register={register}
        onClickMoveToSignUp={onClickMoveToSignUp}
        onClickMoveToMain={onClickMoveToMain}
        onClickLogIn={onClickLogIn}
        onClickAdmin={onClickAdmin}
        adminOn={adminOn}
        onClickKakaoLogIn={onClickKakaoLogIn}
        onClickNaverLogIn={onClickNaverLogIn}
        onClickGoogleLogIn={onClickGoogleLogIn}
      />
    </>
  );
}
