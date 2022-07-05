import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`;

const Box = styled.div`
  width: 100px;
  height: 150px;
  background-color: black;
  color: white;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;

export default function Test() {
  return (
    <Wrapper>
      <Box>Card</Box>
    </Wrapper>
  );
}
