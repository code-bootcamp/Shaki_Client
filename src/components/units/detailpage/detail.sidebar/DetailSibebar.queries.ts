import { gql } from "@apollo/client";

export const CREATE_PAYMENT = gql`
  mutation createPayment($createPaymentInput: CreatePaymentInput!) {
    createPayments(createPaymentInput: $createPaymentInput) {
      id
      date
      start_time
      end_time
      amount
      status
      guest
      user
      branch
      room
    }
  }
`;
