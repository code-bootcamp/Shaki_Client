import LogInPresenter from "./LogInPresenter";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOG_IN } from "./LogInMutation";

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

  const onClickAdmin = (event: React.MouseEvent<HTMLDivElement>) => {
    setAdminOn((prev) => !prev);
  };

  const onClickLogIn = async (data: any) => {
    console.log(data);
    try {
      await logInUser({
        variables: {
          email: data.email,
          pwd: data.pwd,
        },
      });

      router.push("/main");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const onClickKakaoLogIn = () => {
    router.push("https://shakiback.shop/login/kakao");
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
    />
  );
}
