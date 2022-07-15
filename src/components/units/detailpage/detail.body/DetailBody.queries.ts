import { gql } from "@apollo/client";

export const CREATE_REVIEW = gql`
  mutation createReview($createReview: CreateReviewInput!) {
    createReview(createReview: $createReview)
  }
`;

export const FETCH_ROOM = gql`
  query fetchRoom($id: String!) {
    fetchRoom(id: $id) {
      tags {
        tag
      }
      name
      remarks
      contents
      address
      reviews {
        id
        star
        user {
          name
        }
        content
      }
    }
  }
`;
