import { gql } from "@apollo/client";

export const FETCH_QUESTIONS = gql`
  query fetchQuestions {
    fetchQuestions {
      id
      name
      email
      title
      category
      content
    }
  }
`;
