import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import AdminQuestionAnswerUI from "./AdminQuestionAnswer.presenter";
import { FETCH_QUESTION } from "./AdminQuestionAnswer.queries";

export default function AdminQuestionAnswer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_QUESTION, {
    variables: {
      id: router.query.id,
    },
  });

  return <AdminQuestionAnswerUI data={data} />;
}
