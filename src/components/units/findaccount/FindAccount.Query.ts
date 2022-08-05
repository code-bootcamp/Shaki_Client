import { gql } from "@apollo/client";

export const FIND_EMAIL = gql`
  query findEmail($name: String!, $phone_num: String!) {
    findEmail(name: $name, phone_num: $phone_num)
  }
`;

export const FIND_PWD = gql`
  mutation findPwd($email: String!, $name: String!, $phone_num: String!) {
    findPwd(email: $email, name: $name, phone_num: $phone_num)
  }
`;
