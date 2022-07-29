import LogInPresenter from "./LogIn.Presenter";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { LOG_IN } from "./LogIn.Mutation";
import { useRecoilState } from "recoil";
import { accessTokenState, adminAuthState } from "../../../commons/store";

const schema = yup.object({
  email: yup.string().required(),
  pwd: yup.string().required(),
});

export default function LogInContainer() {
  const { handleSubmit, formState, register } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const RESTORE_ACCESS_TOKEN = gql`
    mutation restoreAccessToken {
      restoreAccessToken
    }
  `;

  const [restoreToken] = useMutation(RESTORE_ACCESS_TOKEN);

  const onClick = async () => {
    const result = await restoreToken;
    console.log(result);
  };

  const [logInUser] = useMutation(LOG_IN);
  const [adminOn, setAdminOn] = useState(false);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [adminAuth, setAdminAuth] = useRecoilState(adminAuthState);

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
      if (data.email === "admin@admin.com") {
        sessionStorage.setItem("admin", "true");
        router.push("adminpage");
      } else {
        router.push("/mypage");
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  const onClickKakaoLogIn = () => {
    router.push("https://shaki-server.shop/login/kakao");
  };

  const onClickGoogleLogIn = () => {
    router.push("https://shaki-server.shop/login/google");
  };

  const onClickNaverLogIn = () => {
    router.push("https://shaki-server.shop/login/naver");
  };

  const router = useRouter();
  const onClickMoveToSignUp = (event: React.MouseEvent<HTMLDivElement>) => {
    router.push("/signup");
  };
  const onClickMoveToMain = () => {
    router.push("/main");
  };

  return (
    <>
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
        onClick={onClick}
      />
    </>
  );
}
