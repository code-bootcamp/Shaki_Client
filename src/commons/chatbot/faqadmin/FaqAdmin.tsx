import * as FA from "./FaqAdmin.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_QUESTION } from "./FaqAdmin.queries";
import { FETCH_LOGIN_USER } from "../../../components/commons/layout/header/Header.queries";
import { useState } from "react";
import { useRouter } from "next/router";
import { Modal } from "antd";

const schema = yup.object({
  title: yup.string().required("문의제목은 필수 입력 사항입니다."),
  contents: yup.string().required("문의내용은 필수 입력 사항입니다."),
});

export default function FaqAdmin() {
  const { data: loginData } = useQuery(FETCH_LOGIN_USER);
  const [category, setCategory] = useState();
  const [createQuestion] = useMutation(CREATE_QUESTION);
  const router = useRouter();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onClickSubmit = async (data: any) => {
    try {
      const result = await createQuestion({
        variables: {
          createQuestionInput: {
            ...data,
            category,
            name: loginData?.fetchLoginUser.name,
            email: loginData?.fetchLoginUser.email,
          },
        },
      });
      console.log(result);

      Modal.success({ content: "문의글이 등록되었습니다." });

      router.push("/main");
    } catch (error) {
      Modal.error({ content: "문의글 등록실패." });
    }
  };

  const onChangeCategory = (event: any) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <FA.Wrapper>
        <FA.SignUpForm onSubmit={handleSubmit(onClickSubmit)}>
          <FA.HeaderWrapper>
            <FA.Icon />
            <h1>1:1 문의센터</h1>
          </FA.HeaderWrapper>
          <FA.Label>📛 이름 *</FA.Label>
          <FA.UserName
            placeholder={loginData?.fetchLoginUser.name}
            readOnly
          ></FA.UserName>
          <FA.Label>📧 이메일 *</FA.Label>
          <FA.UserEmail
            placeholder={loginData?.fetchLoginUser.email}
            readOnly
          ></FA.UserEmail>
          <FA.Label>📝 제목 *</FA.Label>
          <FA.Title type="text" {...register("title")}></FA.Title>
          <FA.Error>{formState.errors.title?.message}</FA.Error>
          <FA.Label>🔘 문의 카테고리선택 *</FA.Label>

          <select
            style={{
              width: "300px",
              height: "50px",
              border: "1px solid black",
            }}
            onChange={onChangeCategory}
            id="category-select"
          >
            <option value="0">문의 카테고리를 선택해주세요</option>
            <option value="예약문의">예약문의</option>
            <option value="환불신청">환불신청</option>
            <option value="가맹점신청">가맹점신청</option>
            <option value="지점상세문의">지점상세문의</option>
          </select>
          <FA.Label>📝문의 내용 *</FA.Label>
          <FA.Contents {...register("contents")}></FA.Contents>
          <FA.Error>{formState.errors.contetns?.message}</FA.Error>
          <FA.Button>문의 등록하기 </FA.Button>
        </FA.SignUpForm>
      </FA.Wrapper>
    </>
  );
}
