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

// export const FETCH_ROOM = gql`
//   query fetchRoom($id: String!) {
//     fetchRoom(id: $id) {
//       tags {
//         tag
//       }
//       name
//       remarks
//       contents
//       address
//       reviews {
//         id
//         star
//         user {
//           name
//         }
//         content
//       }
//     }
//   }
// `;
