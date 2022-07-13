import { useQuery } from "@apollo/client";
import React, { ChangeEvent, useState } from "react";
import FindAccounPresenter from "./FindAccount.Presenter";
import { FIND_EMAIL } from "./FindAccount.Query";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  phone_num: yup.string().required("전화번호를 입력해주세요"),
  name: yup.string().required("이름을 입력해주세요"),
});

export default function FindAccountContainer() {
  const { handleSubmit, formState, register } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const [name, setName] = useState("");
  const [digits, setDigits] = useState("");

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onChangeDigits = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDigits(event.target.value);
  };
  const { data } = useQuery(FIND_EMAIL, {
    variables: {
      name,
      phone_num:
        digits.slice(0, 3) +
        "-" +
        digits.slice(3, 7) +
        "-" +
        digits.slice(7, 11),
    },
  });

  const onClickShowEmail = (event: React.MouseEvent<HTMLButtonElement>) => {
    alert(`${name}님의 아이디는 *****${data.findEmail.substring(5)} 입니다.`);
  };

  return (
    <FindAccounPresenter
      onChangeName={onChangeName}
      onChangeDigits={onChangeDigits}
      onClickShowEmail={onClickShowEmail}
      data={data}
    />
  );
}
