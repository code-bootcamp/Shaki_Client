import styled from "@emotion/styled";

const WrapperRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  /* background-image: url("/faq/store.png"); */
  background-image: url("https://storage.googleapis.com/front_image/store.png");

  background-size: contain;
  background-repeat: no-repeat;
  width: 1200px;
  height: 1200px;
  margin: auto;
`;

const Header = styled.div`
  /* background-image: url("/landing/5.png"); */
  background-image: url("https://storage.googleapis.com/front_image/5.png");

  background-size: contain;
  background-repeat: no-repeat;
  width: 1200px;
  height: 1200px;
  margin: auto;
`;

export default function StoreTxt() {
  return (
    <WrapperRoot>
      <Header></Header>
      <Wrapper></Wrapper>
    </WrapperRoot>
  );
}
