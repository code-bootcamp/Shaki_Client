import * as Ad from "./AdminQuestionAnswer.styles";

interface IAdminQuestionAnswerUI {
  error: string;
  data?: any;
  onChangeReplyContent: (event: any) => void;
  onClickAnswer: (data: any) => void;
}

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
            <Ad.TitleLabel
              type="text"
              defaultValue={props.data?.fetchQuestion.name}
              readOnly
            />

            <Ad.EmailLabel
              type="text"
              value={`이메일: ${props.data?.fetchQuestion.email}`}
              readOnly
            />
          </Ad.ProfileWrapper>

          <Ad.QuestionWrapper>
            <Ad.QuestionLabel
              type="text"
              value={`제목: ${props.data?.fetchQuestion.title}`}
              readOnly
            />

            <Ad.CategoryLabel
              type="text"
              value={`카테고리 : ${props.data?.fetchQuestion.category}`}
              readOnly
            />
          </Ad.QuestionWrapper>

          <Ad.QuestionContentLabel>
            내용 :
            <Ad.QuestionContent
              type="text"
              defaultValue={props.data?.fetchQuestion.content}
              readOnly
            />
          </Ad.QuestionContentLabel>
          <Ad.DivedLine />

          <Ad.AnswerWrapper>
            <Ad.AnswerTitle>답변 내용</Ad.AnswerTitle>
            <Ad.ReplyContentWrapper>
              <Ad.ReplyContent onChange={props.onChangeReplyContent} />
              <Ad.Error>{props.error}</Ad.Error>
            </Ad.ReplyContentWrapper>
          </Ad.AnswerWrapper>
        </Ad.OptionNew>
        <Ad.ButtonWrapper>
          <Ad.SubmitButton type="button" onClick={props.onClickAnswer}>
            답변보내기
          </Ad.SubmitButton>
        </Ad.ButtonWrapper>
      </Ad.Wrapper>
    </Ad.WrapperRoot>
  );
}
