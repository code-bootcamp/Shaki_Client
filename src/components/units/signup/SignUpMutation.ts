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
