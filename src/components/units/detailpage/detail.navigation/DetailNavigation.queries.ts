import { gql } from "@apollo/client";

export const FETCH_BRANCHES = gql`
  query fetchBranches {
    fetchBranches {
      id
      branch {
        id
        branch
        idAll
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
