import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import AdminQuestionAnswerUI from "./AdminQuestionAnswer.presenter";
import { FETCH_QUESTION, REPLY_QUESTION } from "./AdminQuestionAnswer.queries";

export default function AdminQuestionAnswer() {
  const router = useRouter();
  const [replyContent, setReplyContent] = useState("");

  const onChangeReplyContent = (event) => {
    setReplyContent(event.target.value);
  };

  const { data } = useQuery(FETCH_QUESTION, {
    variables: {
      id: router.query.id,
    },
  });
  console.log(data);

  const [replyQuestion] = useMutation(REPLY_QUESTION);

  const onClickAnswer = async (data) => {
    console.log("111", data);
    await replyQuestion({
      variables: {
        createQusetionInput: {
          // name: data.fetchQuestion.name,
          // email: data?.fetchQuestion.email,
          // title: data?.fetchQuestion.title,
          // category: data?.fetchQuestion.category,
          // content: data?.fetchQuestion.content,
          replyContent,
        },
      },
    });
    console.log("123");
  };

  return (
    <AdminQuestionAnswerUI
      data={data}
      onClickAnswer={onClickAnswer}
      onChangeReplyContent={onChangeReplyContent}
    />
  );
}
