import { gql } from "@apollo/client";

export const TOGGLE_PICK = gql`
  mutation togglePick($roomId: String!) {
    togglePick(roomId: $roomId)
  }
`;
