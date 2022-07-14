import { gql } from "@apollo/client";

export const FETCH_BRANCHES = gql`
  query fetchBranches {
    fetchBranches {
      id
      name
      remarks
      branch {
        branch
        id
      }
      images {
        url
      }
      star
    }
  }
`;
