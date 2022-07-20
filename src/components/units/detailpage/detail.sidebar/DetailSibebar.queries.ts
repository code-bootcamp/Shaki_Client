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
      point
    }
  }
`;

export const FETCH_RESERVATION = gql`
  query fetchReservation($room: String!, $date: String!) {
    fetchReservation(room: $room, date: $date)
  }
`;

export const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      name
      email
      phone_num
    }
  }
`;
