import { gql } from "@apollo/client";

export const FETCH_QUESTION = gql`
  query fetchQuestion($id: String!) {
    fetchQuestion(id: $id) {
      id
      name
      email
      title
      category
      content
    }
  }
`;

export const REPLY_QUESTION = gql`
  mutation replyQuestion($createQuestionInput: ReplyQuestionInput!) {
    replyQuestion(createQuestionInput: $createQuestionInput)
  }
`;
