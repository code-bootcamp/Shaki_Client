import { gql } from "@apollo/client";

export const USER_INFO = gql`
  query fetchLoginUser {
    fetchLoginUser {
      email
      name
      point
      room {
        id
        remarks
        name
        images {
          url
        }
      }
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
          }
        }
      }
    }
  }
`;
