import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import FindAccounPresenter from "./FindAccount.Presenter";
import { FIND_EMAIL } from "./FindAccount.Query";

export default function FindAccountContainer() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [digits, setDigits] = useState("");
  const [page, setPage] = useState(true);

  const onClickEmailPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(true);
  };

  const onClickPwdPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(false);
  };
  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
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

  const onClickFindEmail = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!name || !digits) {
      alert("정보를 입력해주세요.");
    } else if (data) {
      alert(`${name}님의 아이디는 *****${data.findEmail.substring(5)} 입니다.`);
    } else if (!data) {
      alert("정보가 없습니다. 이름또는 전화번호를 확인해주세요.");
    }
  };

  const onClickCancel = () => {
    router.push("/main");
  };

  return (
    <FindAccounPresenter
      onClickEmailPage={onClickEmailPage}
      onClickPwdPage={onClickPwdPage}
      onChangeName={onChangeName}
      onChangeDigits={onChangeDigits}
      onClickFindEmail={onClickFindEmail}
      onClickCancel={onClickCancel}
      onChangeEmail={onChangeEmail}
      page={page}
      data={data}
    />
  );
}
