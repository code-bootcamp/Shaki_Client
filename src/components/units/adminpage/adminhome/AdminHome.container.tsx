import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import AdminHomeUI from "./AdminHome.presenter";
import {
  FETCH_PAYMENTS,
  FETCH_QUESTIONS,
  FETCH_ROOMS,
  FETCH_USERNUM,
} from "./AdminHome.queries";

export default function AdminHome() {
  const router = useRouter();

  const onClickMoveReservation = () => {
    router.push(`/adminpage/adminreservation`);
  };
  const onClickMoveQuestion = () => {
    router.push(`/adminpage/adminquestion`);
  };
  const onClickMoveList = () => {
    router.push(`/adminpage/adminlist`);
  };

  const { data: paymentdata } = useQuery(FETCH_PAYMENTS);
  const { data: questiondata } = useQuery(FETCH_QUESTIONS);
  const { data: usernumdata } = useQuery(FETCH_USERNUM);
  const { data: roomnumdata } = useQuery(FETCH_ROOMS);

  console.log("data", paymentdata, questiondata, usernumdata);

  return (
    <AdminHomeUI
      paymentdata={paymentdata}
      questiondata={questiondata}
      usernumdata={usernumdata}
      roomnumdata={roomnumdata}
      onClickMoveReservation={onClickMoveReservation}
      onClickMoveQuestion={onClickMoveQuestion}
      onClickMoveList={onClickMoveList}
    />
  );
}
