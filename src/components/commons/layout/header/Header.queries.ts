import { gql } from "@apollo/client";

export const LOG_OUT = gql`
  mutation logout {
    logout
  }
`;

// export const FETCH_LOGIN_USER = gql`
//   mutation fetchLoginUser(???) {
//     fetchLoginUser(???) {
//       name
//     }
//   }
// `;