import { Card } from "semantic-ui-react";
import { Message } from "semantic-ui-react";
import * as AD from "./AdminHome.styles";

export default function AdminHomeUI() {
  return (
    <AD.Wrapper>
      <AD.BodyWrapper>
        <div
          style={{
            height: "100px",
            marginTop: "100px",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "500px",
              height: "500px",
            }}
          >
            <Message info>
              <Message.Header>
                서버 DB와 연결 성공! 데이터가 정상적으로 출력됩니다.
              </Message.Header>
              <p>다음 아래 목록에서 데이터를 확인해주세요!</p>
            </Message>
          </div>
        </div>

        <div
          style={{
            height: "100px",
            marginTop: "100px",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "500px",
              height: "500px",
            }}
          >
            <Message negative>
              <Message.Header>
                서버 DB와 연결 실패! 데이터가 정상적으로 출력되지 않습니다
              </Message.Header>
              <p>서버 연결상태를 확인해주세요!</p>
            </Message>
          </div>
        </div>

        <div
          style={{
            height: "150px",
            marginTop: "100px",
            display: "flex",
          }}
        >
          <Card.Group>
            <Card>
              <Card.Content>
                <Card.Header>결제금액 합산</Card.Header>
                <Card.Meta>transaction$</Card.Meta>
                <Card.Description>총 240,000원</Card.Description>
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <Card.Header content="회원수" />
                <Card.Meta content="Users" />
                <Card.Description content="현재 가입된 회원수는 n명입니다." />
              </Card.Content>
            </Card>

            <Card>
              <Card.Content
                header="예약내역"
                meta="Reservation"
                description="현재 예약진행중인 건은  n건입니다."
              />
            </Card>

            <Card
              header="문의내역"
              meta="Inquiry details"
              description="현재 미답변 문의내역은 n건입니다."
            />
          </Card.Group>
        </div>
      </AD.BodyWrapper>
    </AD.Wrapper>
  );
}
