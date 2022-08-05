import { gql } from "@apollo/client";

export const LOG_IN = gql`
  mutation login($email: String!, $pwd: String!) {
    login(email: $email, pwd: $pwd)
  }
`;
