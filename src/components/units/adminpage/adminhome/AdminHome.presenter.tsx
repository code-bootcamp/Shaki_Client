import { Card } from "semantic-ui-react";

export default function AdminHomeUI() {
  return (
    <Card.Group>
      <Card>
        <Card.Content>
          <Card.Header>회원 결제금액 합산</Card.Header>
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
  );
}
