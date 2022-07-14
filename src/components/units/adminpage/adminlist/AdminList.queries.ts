import { gql } from "@apollo/client";

export const FETCH_ROOMS = gql`
  query fetchRooms {
    fetchRooms {
      id
      branch {
        branch
      }
      name
      remarks
    }
  }
`;
