import { gql } from "@apollo/client";

export const FIND_EMAIL = gql`
  query findEmail($name: String!, $phone_num: String!) {
    findEmail(name: $name, phone_num: $phone_num)
  }
`;
