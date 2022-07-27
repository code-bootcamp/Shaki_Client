import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import AdminHomeUI from "./AdminHome.presenter";
import {
  FETCH_PAYMENTS,
  FETCH_PAYMENTSUM,
  FETCH_QUESTIONS,
  FETCH_ROOMS,
  FETCH_USERNUM,
} from "./AdminHome.queries";

export default function AdminHome() {
  const router = useRouter();

  const onClickMoveReservation = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    router.push(`/adminpage/adminreservation`);
  };
  const onClickMoveQuestion = (event: React.MouseEvent<HTMLAnchorElement>) => {
    router.push(`/adminpage/adminquestion`);
  };
  const onClickMoveList = (event: React.MouseEvent<HTMLAnchorElement>) => {
    router.push(`/adminpage/adminlist`);
  };

  const { data: paymentsumdata } = useQuery(FETCH_PAYMENTSUM);
  const { data: paymentdata } = useQuery(FETCH_PAYMENTS);
  const { data: questiondata } = useQuery(FETCH_QUESTIONS);
  const { data: usernumdata } = useQuery(FETCH_USERNUM);
  const { data: roomnumdata } = useQuery(FETCH_ROOMS);

  return (
    <AdminHomeUI
      paymentsumdata={paymentsumdata}
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
