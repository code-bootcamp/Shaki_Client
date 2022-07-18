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
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../store";
import SecurityTxt from "./faqadminitems/FaqAdminItems";
import FaqAdminHeaderPage from "./faqadminheader/FaqAdminHeader.presenter";

const schema = yup.object({
  title: yup.string().required("문의제목은 필수 입력 사항입니다."),
  content: yup.string().required("문의내용은 필수 입력 사항입니다."),
});

export default function FaqAdmin() {
  const { data: loginData } = useQuery(FETCH_LOGIN_USER);
  const [category, setCategory] = useState();
  const [createQuestion] = useMutation(CREATE_QUESTION);
  const [accessToken] = useRecoilState(accessTokenState);
  const [guestEmail, setGuestEmail] = useState("");
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const onChangeGuestEmail = (event: any) => {
    setGuestEmail(event.target.value);
  };

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onClickSubmit = async (data: any) => {
    console.log(loginData);
    if (checked == false) {
      Modal.error({ content: "개인정보를 동의해주세요." });
    } else {
      try {
        const result = await createQuestion({
          variables: {
            createQuestionInput: {
              ...data,
              category,
              name: loginData?.fetchLoginUser.name || "Guest",
              email: loginData?.fetchLoginUser.email || guestEmail,
            },
          },
        });
        console.log(data);
        console.log(category);

        Modal.success({ content: "문의글이 등록되었습니다." });

        router.push("/main");
      } catch (error) {
        Modal.error({ content: "문의글 등록실패." });
      }
    }
  };

  const onChangeCategory = (event: any) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <FaqAdminHeaderPage />
      <FA.Wrapper>
        <FA.SignUpForm onSubmit={handleSubmit(onClickSubmit)}>
          <FA.HeaderWrapper>
            <h2 style={{ color: "white" }}>문의 양식에 알맞게 작성해주세요.</h2>
          </FA.HeaderWrapper>
          <FA.LabelWrapper>
            <FA.Label>📛 이름 *</FA.Label>
            <FA.UserName
              placeholder={loginData?.fetchLoginUser.name || "Guest"}
              readOnly
            ></FA.UserName>
          </FA.LabelWrapper>
          <FA.LabelWrapper>
            <FA.Label>📧 이메일 *</FA.Label>
            {accessToken ? (
              <FA.UserEmail
                placeholder={loginData?.fetchLoginUser.email}
                readOnly
              ></FA.UserEmail>
            ) : (
              <FA.UserEmail
                placeholder="답변받으실 이메일을 입력해주세요"
                onChange={onChangeGuestEmail}
              ></FA.UserEmail>
            )}
          </FA.LabelWrapper>
          <FA.LabelWrapper>
            <FA.Label>📝 제목 *</FA.Label>
            <FA.Title type="text" {...register("title")}></FA.Title>
          </FA.LabelWrapper>

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
          <FA.Contents {...register("content")}></FA.Contents>
          <FA.Error>{formState.errors.contetns?.message}</FA.Error>

          <SecurityTxt
            checked={checked}
            setChecked={setChecked}
            handleChange={handleChange}
          />

          <FA.Button>문의 등록하기 </FA.Button>
        </FA.SignUpForm>
      </FA.Wrapper>
    </>
  );
}
