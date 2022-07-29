import { useQuery } from "@apollo/client";
import { GridEventListener } from "@mui/x-data-grid";
import { useRouter } from "next/router";
import React, { MouseEvent } from "react";
import { GridRowProps } from "semantic-ui-react";
import { useAdminAuth } from "../../../../../hooks/useAdminAuth";
import AdminQuestionUI from "./AdminQuestion.presenter";
import { FETCH_QUESTIONS } from "./AdminQuestion.queries";

function AdminQuestion() {
  const router = useRouter();

  const { data } = useQuery(FETCH_QUESTIONS);

  console.log(data);

  const onClickMoveQuestionDetail = (event: GridEventListener<"cellClick">) => {
    router.push(`/adminpage/adminquestion/${(event as GridRowProps).id}`);
  };

  return (
    <AdminQuestionUI
      data={data}
      onClickMoveQuestionDetail={onClickMoveQuestionDetail}
    />
  );
}

export default useAdminAuth(AdminQuestion);
