import styled from "@emotion/styled";

const Wrapper = styled.div`
  /* background-image: url("/faq/center.png"); */
  background-image: url("https://storage.googleapis.com/front_image/center.png");

  background-size: contain;
  background-repeat: no-repeat;
  width: 1200px;
  height: 250px;
  margin: auto;
`;

export default function CenterTxt() {
  return (
    <>
      <Wrapper></Wrapper>
    </>
  );
}
