import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import AdminQuestionAnswerUI from "./AdminQuestionAnswer.presenter";
import { FETCH_QUESTION, REPLY_QUESTION } from "./AdminQuestionAnswer.queries";

export default function AdminQuestionAnswer() {
  const router = useRouter();
  const [replyContent, setReplyContent] = useState("");
  const [error, setError] = useState("");

  const onChangeReplyContent = (event) => {
    setReplyContent(event.target.value);
  };

  const { data } = useQuery(FETCH_QUESTION, {
    variables: {
      id: router.query.id,
    },
  });

  const [replyQuestion] = useMutation(REPLY_QUESTION);

  const onClickAnswer = async () => {
    if (!replyContent) {
      setError("답변 내용을 작성해주세요!");
    } else {
      try {
        await replyQuestion({
          variables: {
            createQuestionInput: {
              name: data?.fetchQuestion.name,
              email: data?.fetchQuestion.email,
              title: data?.fetchQuestion.title,
              category: data?.fetchQuestion.category,
              content: data?.fetchQuestion.content,
              replyContent,
            },
          },
        });
        alert("답변이 이메일로 전송 되었습니다.");
        router.push(`/adminpage/adminquestion`);
      } catch (error) {
        alert("답변 실패 하였습니다.");
      }
    }
  };

  return (
    <AdminQuestionAnswerUI
      error={error}
      data={data}
      onClickAnswer={onClickAnswer}
      onChangeReplyContent={onChangeReplyContent}
    />
  );
}
