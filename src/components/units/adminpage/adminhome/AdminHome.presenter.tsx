import { Card } from "semantic-ui-react";
import { Message } from "semantic-ui-react";
import * as AD from "./AdminHome.styles";

interface IAdminHomeUI {
  paymentsumdata?: any;
  paymentdata?: any;
  questiondata?: any;
  usernumdata?: any;
  roomnumdata?: any;
  onClickMoveReservation: () => void;
  onClickMoveQuestion: () => void;
  onClickMoveList: () => void;
}

export default function AdminHomeUI(props: IAdminHomeUI) {
  console.log("data", props.paymentsumdata);
  return (
    <AD.Wrapper>
      <AD.BodyWrapper>
        {props.paymentdata?.fetchPayments ? (
          <AD.SuccessWrapper>
            <Message
              style={{
                width: "800px",
                height: "200px",
                fontSize: "20px",
                textAlign: "center",
                overflowY: "scroll",
              }}
              info
            >
              <Message.Header>
                관리자님 지금 현재 서버 DB와 연결 성공! <br />
                저장되어 있는 데이터를 불러옵니다.
              </Message.Header>
              <p>다음 아래 목록에서 데이터를 확인해주세요!</p>
            </Message>
          </AD.SuccessWrapper>
        ) : (
          <AD.FailWrapper>
            <Message
              style={{ width: "100%", height: "200px", fontSize: "20px" }}
              negative
            >
              <Message.Header>
                서버 DB와 연결 실패! 데이터가 정상적으로 출력되지 않습니다.
              </Message.Header>
              <p>서버 연결상태를 확인해주세요!</p>
            </Message>
          </AD.FailWrapper>
        )}

        <AD.CardWrapper>
          <Card.Group>
            <Card>
              <Card.Content>
                <Card.Header>결제금액 합산</Card.Header>
                <Card.Meta>transaction$</Card.Meta>
                <Card.Description>
                  {props.paymentsumdata?.fetchPaymentSum}
                </Card.Description>
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <Card.Header content="회원수" />
                <Card.Meta content="Users" />
                <Card.Description
                  content={`현재 가입된 회원수는 ${props.usernumdata?.fetchUserNum}명입니다.`}
                />
              </Card.Content>
            </Card>

            <Card
              style={{ cursor: "pointer" }}
              header="가맹점 수"
              meta="List"
              description={`현재 문의내역은 ${props.questiondata?.fetchQuestions.length}건입니다.`}
              onClick={props.onClickMoveList}
            />
            <Card
              style={{ cursor: "pointer" }}
              header="예약내역"
              meta="Reservation"
              description={`현재 예약진행중인 건은  ${props.paymentdata?.fetchPayments.length}건입니다.`}
              onClick={props.onClickMoveReservation}
            />

            <Card
              style={{ cursor: "pointer" }}
              header="문의내역"
              meta="Question"
              description={`현재 문의내역은 ${props.questiondata?.fetchQuestions.length}건입니다.`}
              onClick={props.onClickMoveQuestion}
            />
          </Card.Group>
        </AD.CardWrapper>
      </AD.BodyWrapper>
    </AD.Wrapper>
  );
}
