import { gql } from "@apollo/client";

export const FETCH_PAYMENTS = gql`
  query fetchPayments {
    fetchPayments {
      id
      date
      start_time
      end_time
      amount
      room {
        name
      }
    }
  }
`;
