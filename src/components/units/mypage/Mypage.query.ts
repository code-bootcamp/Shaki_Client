import { gql } from "@apollo/client";

export const USER_INFO = gql`
  query fetchLoginUser {
    fetchLoginUser {
      name
      point
      payment {
        id
        date
        start_time
        end_time
        amount
        room {
          id
          remarks
          name
          zipcode
          address
          images {
            id
            url
            room {
              id
            }
          }
        }
      }
    }
  }
`;
