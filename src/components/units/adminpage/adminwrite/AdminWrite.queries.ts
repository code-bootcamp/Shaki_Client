import { gql } from "@apollo/client";

export const CREATE_ROOM = gql`
  mutation createRoom($createRoom: CreateRoomInput!) {
    createRoom(createRoom: $createRoom)
  }
`;

export const REMOVE_FILE = gql`
  mutation removeFile($imageUrl: String!) {
    removeFile(imageUrl: $imageUrl)
  }
`;
