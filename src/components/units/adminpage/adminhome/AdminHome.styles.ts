import { Card } from "semantic-ui-react";
import { Message } from "semantic-ui-react";
import styled from "@emotion/styled";

export const MessageIcon = styled(Message)``;
export const CardIcon = styled(Card)``;
export const Wrapper = styled.div`
  width: calc(100% - 250px);
  padding: 50px;
`;
export const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SuccessWrapper = styled.div`
  width: 100%;
  display: flex;
`;
export const FailWrapper = styled.div`
  width: 100%;
  display: flex;
`;
export const CardWrapper = styled.div`
  height: 150px;
  margin-top: 100px;
  display: flex;
`;
export const MessageHeader = styled.div``;
export const MessageContents = styled.p``;
export const MessageFailWrapper = styled.div``;
export const MessageFail = styled.div``;
