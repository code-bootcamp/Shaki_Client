import * as AAW from "./AdminQuestionAnswer.styles";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});
export default function AdminQuestionAnswerUI() {
  return (
    <AAW.WrapperRoot>
      <AAW.Wrapper>
        <AAW.Logo src="/logo.png" />
        <AAW.OptionNew>문의 답변하기</AAW.OptionNew>
        <AAW.DivedLine />
        <AAW.OptionNew>
          <AAW.TitleLabel>답변받을 유저 이름</AAW.TitleLabel>
          <AAW.EmailLabel>답변받을 유저 이메일</AAW.EmailLabel>
          <ReactQuill style={{ height: "500px" }} />
        </AAW.OptionNew>
      </AAW.Wrapper>
      <AAW.ButtonWrapper>
        <AAW.SubmitButton variant="outlined">답변하기</AAW.SubmitButton>
      </AAW.ButtonWrapper>
    </AAW.WrapperRoot>
  );
}
