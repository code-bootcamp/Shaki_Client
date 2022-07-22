import { gql } from "@apollo/client";

export const FETCH_PAYMENTS = gql`
  query fetchPayments {
    fetchPayments {
      id
    }
  }
`;

export const FETCH_QUESTIONS = gql`
  query fetchQuestions {
    fetchQuestions {
      id
      name
      email
      title
      category
      content
    }
  }
`;

export const FETCH_USERNUM = gql`
  query fetchUserNum {
    fetchUserNum
  }
`;
export const FETCH_ROOMS = gql`
  query fetchRooms {
    fetchRooms {
      id
      branch {
        branch
      }
      name
      remarks
    }
  }
`;

export const FETCH_PAYMENTSUM = gql`
  query fetchPaymentSum {
    fetchPaymentSum
  }
`;
