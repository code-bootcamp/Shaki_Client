import { gql } from "@apollo/client";

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`;
export const REMOVE_FILE = gql`
  mutation removeFile($imageUrl: String!) {
    removeFile(imageUrl: $imageUrl)
  }
`;
