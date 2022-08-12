import { gql } from "@apollo/client";

export const CREATE_REVIEW = gql`
  mutation createReview($createReviewInput: CreateReviewInput!) {
    createReview(createReviewInput: $createReviewInput)
  }
`;

export const FETCH_REVIEWS = gql`
  query fetchReviews($pageNum: Float!, $roomId: String!) {
    fetchReviews(pageNum: $pageNum, roomId: $roomId) {
      id
      content
      star
      user {
        name
      }
    }
  }
`;
