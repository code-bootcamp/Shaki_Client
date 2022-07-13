import * as FA from "./FaqAdmin.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다")
    .required("이메일은 필수 입력 사항입니다"),
  title: yup.string().required("문의제목은 필수 입력 사항입니다."),
  contents: yup.string().required("문의내용은 필수 입력 사항입니다."),
});

export default function FaqAdmin() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  return (
    <>
      <FA.Wrapper>
        <FA.SignUpForm>
          <FA.HeaderWrapper>
            <FA.Icon />
            <h1>1:1 문의센터</h1>
          </FA.HeaderWrapper>
          <FA.Label>📛 이름 *</FA.Label>
          <FA.UserName></FA.UserName>
          <FA.Label>📧 이메일 *</FA.Label>
          <FA.UserEmail></FA.UserEmail>
          <FA.Error>{formState.errors.email?.message}</FA.Error>
          <FA.Label>📝 제목 *</FA.Label>
          <FA.Title></FA.Title>
          <FA.Error>{formState.errors.title?.message}</FA.Error>
          <FA.Label>🔘 문의 카테고리선택 *</FA.Label>

          <select
            style={{
              width: "300px",
              height: "50px",
              border: "1px solid black",
            }}
            id="category-select"
          >
            <option value="0">문의 카테고리를 선택해주세요</option>
            <option value="예약문의">예약문의</option>
            <option value="환불신청">환불신청</option>
            <option value="가맹점신청">가맹점신청</option>
            <option value="지점상세문의">지점상세문의</option>
          </select>
          <FA.Label>📝문의 내용 *</FA.Label>
          <FA.Contents></FA.Contents>
          <FA.Error>{formState.errors.contetns?.message}</FA.Error>
          <FA.Button>문의 등록하기 </FA.Button>
        </FA.SignUpForm>
      </FA.Wrapper>
    </>
  );
}
