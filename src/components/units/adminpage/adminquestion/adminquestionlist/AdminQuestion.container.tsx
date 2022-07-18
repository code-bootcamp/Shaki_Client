import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import AdminQuestionUI from "./AdminQuestion.presenter";
import { FETCH_QUESTIONS } from "./AdminQuestion.queries";

export default function AdminQuestion() {
  const router = useRouter();

  const { data } = useQuery(FETCH_QUESTIONS);

  const onClickMoveQuestionDetail = (event: any) => {
    router.push(`/adminpage/adminquestion/${event.id}`);
  };

  return (
    <AdminQuestionUI
      data={data}
      onClickMoveQuestionDetail={onClickMoveQuestionDetail}
    />
  );
}
