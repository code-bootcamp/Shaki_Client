import styled from "@emotion/styled";
const WrapperRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  background-image: url("/landing/locationlogo.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 150px;
  height: 130px;
  margin-left: 30px;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

const Contents = styled.span`
  font-size: 15px;
  font-weight: 10;
  color: gray;
`;

export default function ChatMain() {
  return (
    <WrapperRoot>
      <Wrapper></Wrapper>
      <Title>쉐이키 ShaKi에 문의하기</Title>
      <Contents>
        신개념 공유주방 플랫폼 쉐이키!<br></br>
        주중 10:00 ~ 19:00 까지 운영{" "}
      </Contents>
    </WrapperRoot>
  );
}
