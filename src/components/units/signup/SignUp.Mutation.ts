import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      name
      id
      email
      pwd
      phone_num
    }
  }
`;

export const CHECK_EMAIL = gql`
  mutation checkEmail($email: String!) {
    checkEmail(email: $email)
  }
`;
