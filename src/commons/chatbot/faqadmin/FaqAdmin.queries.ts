import { gql } from "@apollo/client";

export const CREATE_QUESTION = gql`
  mutation createQuestion($createQuestionInput: CreateQuestionInput!) {
    createQuestion(createQuestionInput: $createQuestionInput)
  }
`;
