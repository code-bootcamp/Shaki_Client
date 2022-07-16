import { gql } from "@apollo/client";

export const CREATE_PAYMENT = gql`
  mutation createPayment($createPaymentInput: CreatePaymentInput!) {
    createPayment(createPaymentInput: $createPaymentInput) {
      id
      date
      start_time
      end_time
      status
      guest
    }
  }
`;
