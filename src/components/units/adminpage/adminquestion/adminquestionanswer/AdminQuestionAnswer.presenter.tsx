import * as Ad from "./AdminQuestionAnswer.styles";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

interface IAdminQuestionAnswerUI {
  data?: any;
}

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

export default function AdminQuestionAnswerUI(props: IAdminQuestionAnswerUI) {
  return (
    <Ad.WrapperRoot>
      <Ad.Wrapper>
        <Ad.TopWrapper>
          <Ad.TopLogo src="/logo.png" />
          <Ad.TopTitle>문의 답변하기</Ad.TopTitle>
        </Ad.TopWrapper>
        <Ad.DivedLine />

        <Ad.OptionNew>
          <Ad.ProfileWrapper>
            <Ad.ProfileImg src="/profile.png" />
            <Ad.TitleLabel>{props.data?.fetchQuestion.name}</Ad.TitleLabel>
            <Ad.EmailLabel>
              이메일: {props.data?.fetchQuestion.email}
            </Ad.EmailLabel>
          </Ad.ProfileWrapper>

          <Ad.QuestionWrapper>
            <Ad.QuestionLabel>
              제목: {props.data?.fetchQuestion.title}
            </Ad.QuestionLabel>

            <Ad.QuestionLabel>
              카테고리 : {props.data?.fetchQuestion.category}
            </Ad.QuestionLabel>
          </Ad.QuestionWrapper>

          <Ad.QuestionContentLabel>
            내용 :
            <Ad.QuestionContent>
              {props.data?.fetchQuestion.content}
            </Ad.QuestionContent>
          </Ad.QuestionContentLabel>
          <Ad.DivedLine />

          <Ad.AnswerWrapper>
            <Ad.AnswerTitle>답변 내용</Ad.AnswerTitle>
            <Ad.ReactQuillWrapper>
              <ReactQuill style={{ height: "200px" }} />
            </Ad.ReactQuillWrapper>
          </Ad.AnswerWrapper>
        </Ad.OptionNew>
        <Ad.ButtonWrapper>
          <Ad.SubmitButton variant="outlined">답변보내기</Ad.SubmitButton>
        </Ad.ButtonWrapper>
      </Ad.Wrapper>
    </Ad.WrapperRoot>
  );
}
