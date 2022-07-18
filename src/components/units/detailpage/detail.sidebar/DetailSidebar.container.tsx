import React, { useEffect, useState } from "react";
import { getTime } from "../../../commons/getDate";
import DetailSidebarUI from "./DetailSidebar.presenter";
import { CREATE_PAYMENT, FETCH_LOGIN_USER } from "./DetailSibebar.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Head from "next/head";

declare const window: typeof globalThis & {
  IMP: any;
};

interface timeTable {
  time: string;
  reserved: boolean;
}

const hour: Array<timeTable> = [
  { time: "09:00", reserved: false },
  { time: "10:00", reserved: false },
  { time: "11:00", reserved: false },
  { time: "12:00", reserved: false },
  { time: "13:00", reserved: false },
  { time: "14:00", reserved: false },
  { time: "15:00", reserved: false },
  { time: "16:00", reserved: false },
  { time: "17:00", reserved: false },
  { time: "18:00", reserved: false },
  { time: "19:00", reserved: false },
  { time: "20:00", reserved: false },
  { time: "21:00", reserved: false },
  { time: "22:00", reserved: false },
];

export default function DetailSidebarContainer() {
  const router = useRouter();

  const [createPayment] = useMutation(CREATE_PAYMENT);
  const { data: user } = useQuery(FETCH_LOGIN_USER);

  const [date, setDate] = useState<string>("");
  const [guest, setGuest] = useState<number>(1);
  const [ToggleGuest, setToggleGuest] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(0);

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [choiceEndPoint, setChoiceEndPoint] = useState<boolean>(false);

  const onClickSetStartTime = (event: React.MouseEvent<HTMLDivElement>) => {
    setStartTime((event.target as HTMLDivElement).id);
    console.log(startTime);

    setChoiceEndPoint(true);
  };

  const onClickSetEndTime = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLDivElement).id < startTime) {
      alert("예약시작 이후의 시간을 골라주세요");
      return;
    } else {
      setEndTime((event.target as HTMLDivElement).id);

      setChoiceEndPoint(false);
      setToggleGuest((prev) => !prev);
    }
  };

  useEffect(() => {
    const duration =
      Number(endTime.replace(":", "")) / 100 -
      Number(startTime.replace(":", "")) / 100;
    setPrice(duration * 20000);
  }, [endTime]);

  // 게스트 초기값
  const onIncrease = () => {
    setGuest((prev) => prev + 1);
  };
  const onDecrease = () => {
    if (guest == 0) {
      return;
    } else {
      setGuest((prev: number) => prev - 1);
    }
  };

  // 다음날짜 구하기
  const Nextday = new Date();
  Nextday.setDate(Nextday.getDate() + 1);
  // maxDate 30일
  const MaxDay = new Date();
  MaxDay.setDate(MaxDay.getDate() + 30);

  const onChangeDate = (newValue: string) => {
    const date = getTime(newValue);
    setDate(date);
  };

  const onClickTime = () => {
    setToggleGuest((prev) => !prev);
  };

  const requestPay = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000

    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "SHAKI",
        amount: 100,
        m_redirect_url: "/",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          try {
            createPayment({
              variables: {
                createPaymentInput: {
                  roomId: router.query.detailid,
                  date,
                  start_time: startTime,
                  end_time: endTime,
                  amount: price,
                  guest: guest,
                },
              },
            });
          } catch (error) {
            alert("결제에 실패하였습니다.");
          }
          router.push("/main");
        } else {
          // ...,
          // 결제 실패 시 로직,
          // ...
          alert("결제가 취소되었습니다.");
        }
      }
    );
  };

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <DetailSidebarUI
        hour={hour}
        price={price}
        date={date}
        Nextday={Nextday}
        MaxDay={MaxDay}
        onChangeDate={onChangeDate}
        guest={guest}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onClickTime={onClickTime}
        ToggleGuest={ToggleGuest}
        startTime={startTime}
        endTime={endTime}
        onClickSetStartTime={onClickSetStartTime}
        onClickSetEndTime={onClickSetEndTime}
        choiceEndPoint={choiceEndPoint}
        requestPay={requestPay}
      />
    </>
  );
}
