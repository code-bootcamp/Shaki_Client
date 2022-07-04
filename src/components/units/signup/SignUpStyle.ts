import styled from "@emotion/styled";

export const Wrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const Head = styled.div`
  font-size: 40px;
`;

export const Body = styled.div`
  width: 20em;
  display: flex;
  flex-direction: column;
  /* border-bottom: 2px solid black; */
  padding-bottom: 20px;
`;

export const BodyInput = styled.input`
  height: 40px;
`;

export const BodyButton = styled.button``;

export const Phone = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const Footer = styled.div`
  width: 25em;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-top: 3px solid gray;
  padding-top: 10px;
`;

export const FooterButton = styled.button`
  width: 9em;
  height: 40px;
`;
