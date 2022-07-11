import { useForm } from "react-hook-form";
import SignUpPresenter from "./SignUpPresenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CHECK_EMAIL, CREATE_USER } from "./SignUpMutation";
import { Modal } from "antd";

const schema = yup.object({
  name: yup.string().required("이름은 필수 입력요소 입니다."),
  email: yup
    .string()
    .required("이메일은 필수 입력요소 입니다.")
    .matches(
      /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/,
      "이메일 형식에 맞지 않습니다."
    ),
  pwd: yup
    .string()
    .required("비밀번호는 필수 입력요소 입니다.")
    .min(10, "비밀번호는 최소 10자리이상 이어야 합니다."),
  phone_num: yup
    .string()
    .required()
    .matches(/^\d{3}-\d{3,4}-\d{4}/, "전화번호 형식에 맞지 않습니다."),
});

export default function SignUpContainer() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const [checkEmail] = useMutation(CHECK_EMAIL);

  const [email, setEmail] = useState("");
  const [auth, setAuth] = useState("");
  const [received, setReceived] = useState("");
  const [checkAuth, setCheckAuth] = useState(false);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangeEmailAuth = (event: ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.value);
    console.log(auth);
  };

  const { handleSubmit, formState, register } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [fliped, setFliped] = useState<boolean>();
  const onClickFliped = (event: React.MouseEvent<HTMLDivElement>) => {
    setFliped((prev) => !prev);
  };

  const [sendAuth, setSendAuth] = useState<boolean>(false);
  const onClickSendAuth = async (event: React.MouseEvent<HTMLDivElement>) => {
    if (!email) {
      alert("이메일을 입력해주세요");
      return;
    } else {
      alert("인증번호가 발송되었습니다.");
      try {
        const authNumber = await checkEmail({
          variables: {
            email: email,
          },
        });
        console.log(authNumber.data.checkEmail);
        setReceived(authNumber.data.checkEmail);
      } catch (error: any) {
        alert(error.message);
      }
      setSendAuth(true);
    }
  };

  const onClickAuthed = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!auth) {
      alert("인증번호를 입력해주세요.");
    } else if (received != auth) {
      alert("인증번호가 다릅니다.");
    } else {
      alert("이메일 인증이 완료되었습니다.");
      setCheckAuth(true);
    }
  };

  const onClickMoveToLanding = (event: React.MouseEvent<HTMLDivElement>) => {
    router.push("/");
  };

  const onClickSubmit = async (data: any) => {
    !checkAuth && alert("이메일 인증이 완료되지 않았습니다.");
    try {
      await createUser({
        variables: {
          createUserInput: {
            name: data.name,
            nickname: data.nickname,
            email: email,
            pwd: data.pwd,
            phone_num: data.phone_num,
          },
        },
      });
      alert("회원가입이 완료되었습니다. 로그인 해주세요");
      router.push("/login");
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };
  return (
    <SignUpPresenter
      handleSubmit={handleSubmit}
      formState={formState}
      register={register}
      fliped={fliped}
      onClickFliped={onClickFliped}
      onClickMoveToLanding={onClickMoveToLanding}
      onClickSubmit={onClickSubmit}
      sendAuth={sendAuth}
      onClickSendAuth={onClickSendAuth}
      onClickAuthed={onClickAuthed}
      onChangeEmail={onChangeEmail}
      onChangeEmailAuth={onChangeEmailAuth}
    />
  );
}
