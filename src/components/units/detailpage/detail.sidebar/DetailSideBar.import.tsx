import { useMutation } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { CREATE_PAYMENT } from "./DetailSibebar.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

interface IpaymentProps {
  date: string;
  startTime: string;
  endTime: string;
  price: number;
  guest: number;
}

// IMP.init("imp49910675");

export default function paymentPage(props: IpaymentProps) {
  const router = useRouter();
  const [createPayment] = useMutation(CREATE_PAYMENT);

  const requestPay = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000 // 가맹점 식별코드 넣기!

    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card", // 가상결제 vbanks
        // merchant_uid: "ORD20180131-0000011",
        name: "Shaki",
        amount: 100, // 가격, price 넘겨주기
        buyer_email: "gildong@gmail.com", // userEmail
        buyer_name: "홍길동", // userName
        buyer_tel: "010-4242-4242", // phone_num
        m_redirect_url: "http://localhost:3000/mypage",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          console.log(rsp);
          // ...,
          // 결제 성공 시 로직,
          // ...
          try {
            createPayment({
              variables: {
                createPaymentInput: {
                  roomId: router.query.detailid,
                  date: props.date,
                  start_time: props.startTime,
                  end_time: props.endTime,
                  amount: props.price,
                  guest: props.guest,
                },
              },
            });
          } catch (error: any) {
            alert(error.message);
          }

          //   백엔드에 결제관련 데이터 넘겨주기 (mutation 실행하기)
          //  ex) createPointTransactionOfLoading
        } else {
          // ...,
          // 결제 실패 시 로직,
          // ...
          alert("결제실패용");
        }
      }
    );
  };

  return (
    <div>
      <Head>
        {/* <!-- jQuery --> /} */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* {/ <!-- iamport.payment.js --> */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <button onClick={requestPay}>결제하기</button>
    </div>
  );
}
