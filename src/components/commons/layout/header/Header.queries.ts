import { gql } from "@apollo/client";

export const LOG_OUT = gql`
  mutation logout {
    logout
  }
`;

export const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      email
      name
    }
  }
`;

export const FETCH_BRANCHES = gql`
  query fetchBranches {
    fetchBranches {
      id
      branch {
        branch
        id
      }
    }
  }
`;

export const FETCH_ROOM = gql`
  query fetchRoom($id: String!) {
    fetchRoom(id: $id) {
      id
      branch {
        id
        branch
      }
      images {
        url
      }
      name
      star
      remarks
    }
  }
`;
