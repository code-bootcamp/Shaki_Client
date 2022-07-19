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

export const DELETE_ROOM = gql`
  mutation deleteRoom($roomId: String!) {
    deleteRoom(roomId: $roomId)
  }
`;
