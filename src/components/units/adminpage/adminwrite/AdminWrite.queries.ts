import { gql } from "@apollo/client";

export const CREATE_ROOM = gql`
  mutation createRoom($createRoomInput: CreateRoomInput!) {
    createRoom(createRoomInput: $createRoomInput)
  }
`;

export const UPDATE_ROOM = gql`
  mutation updateRoom($roomId: String!, $updateRoomInput: UpdateRoomInput!) {
    updateRoom(roomId: $roomId, updateRoomInput: $updateRoomInput) {
      id
    }
  }
`;
