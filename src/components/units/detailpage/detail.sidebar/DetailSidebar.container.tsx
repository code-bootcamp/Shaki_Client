import React, { useEffect, useState } from "react";
import { getTime } from "../../../commons/getDate";
import DetailSidebarUI from "./DetailSidebar.presenter";
import { CREATE_PAYMENT, FETCH_RESERVATION } from "./DetailSibebar.queries";
import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Head from "next/head";
import { useRecoilState } from "recoil";
import { reservedState } from "../../../../commons/store";

declare const window: typeof globalThis & {
  IMP: any;
};

interface timeTable {
  start_time: string;
  end_time: string;
  reserved: boolean;
}

const hour: Array<timeTable> = [
  { start_time: "09:00", end_time: "10:00", reserved: false },
  { start_time: "10:00", end_time: "11:00", reserved: false },
  { start_time: "11:00", end_time: "12:00", reserved: false },
  { start_time: "12:00", end_time: "13:00", reserved: false },
  { start_time: "13:00", end_time: "14:00", reserved: false },
  { start_time: "14:00", end_time: "15:00", reserved: false },
  { start_time: "15:00", end_time: "16:00", reserved: false },
  { start_time: "16:00", end_time: "17:00", reserved: false },
  { start_time: "17:00", end_time: "18:00", reserved: false },
  { start_time: "18:00", end_time: "19:00", reserved: false },
  { start_time: "19:00", end_time: "20:00", reserved: false },
  { start_time: "20:00", end_time: "21:00", reserved: false },
  { start_time: "21:00", end_time: "22:00", reserved: false },
  { start_time: "22:00", end_time: "23:00", reserved: false },
];

export default function DetailSidebarContainer() {
  const router = useRouter();

  const [date, setDate] = useState<string>("");
  const [guest, setGuest] = useState<number>(1);
  const [price, setPrice] = useState<number>(0);
  const [sidePrice, setSidePrice] = useState(0);
  const [choiceEndPoint, setChoiceEndPoint] = useState<boolean>(false);
  const [ToggleGuest, setToggleGuest] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [timeToggle, setTimeToggle] = useState<boolean>(false);
  const [reserved, setReserved] = useRecoilState(reservedState);
  const client = useApolloClient();
  const [clicked, setClicked] = useState([]);

  const [createPayment] = useMutation(CREATE_PAYMENT);

  const onClickToggleTime = (event: React.MouseEvent<HTMLButtonElement>) => {
    // console.log(hour);
    hour[Number(event.currentTarget.id)].reserved = true;
    if (clicked === []) {
      const newClicked = [];
      newClicked.push((event.target as HTMLButtonElement).value);
      setClicked(newClicked);
      setStartTime(clicked[0].slice(0, 2));
      setEndTime(clicked.at(-1).slice(6));
      setPrice(20000 * clicked.length);
    } else {
      const newClicked = [...clicked];
      if (newClicked.includes((event.target as HTMLButtonElement).value)) {
        hour[Number(event.currentTarget.id)].reserved = false;
        setClicked(newClicked.filter((el) => el !== event.target.value));
      } else {
        newClicked.push((event.target as HTMLButtonElement).value);
        setClicked(newClicked);
        setStartTime(clicked[0]?.slice(0, 5));
        setEndTime(clicked.at(-1)?.slice(6));

        // console.log(clicked, event.target);
      }
    }
  };

  const onClickCancel = () => {
    setToggleGuest((prev) => !prev);
  };

  useEffect(() => {
    setPrice(clicked.length * 20000);
    clicked.sort(function (a, b) {
      return a.slice(0, 2) - b.slice(0, 2);
    });
    setStartTime(clicked.length === 0 ? "" : clicked[0].slice(0, 5));
    setEndTime(
      clicked.length === 0 ? "" : clicked[clicked.length - 1].slice(6)
    );
  }, [clicked]);

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

  const onClickTime = () => {
    setToggleGuest((prev) => !prev);
  };

  // 다음날짜 구하기
  const Nextday = new Date();
  Nextday.setDate(Nextday.getDate() + 1);
  // maxDate 30일
  const MaxDay = new Date();
  MaxDay.setDate(MaxDay.getDate() + 30);

  const onChangeDate = async (newValue: string) => {
    const date = getTime(newValue);
    setDate(date);

    const reserved = await client.query({
      query: FETCH_RESERVATION,
      variables: {
        room: router.query.detailid,
        date: date,
      },
    });
    const reservedTime = reserved.data.fetchReservation;
    setReserved(reservedTime);
    // console.log(reserved);
  };
  const reservedStart = reserved[0]?.slice(0, 2);
  const reservedEnd = reserved[0]?.slice(7, 10);
  const reservedArr = [];

  for (let i = Number(reservedStart); i <= Number(reservedEnd); i++) {
    reservedArr.push(`${i}:00 ~ ${i + 1}:00`);
  }

  const onClickCartOpen = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible((prev) => !prev);
  };

  const handleCancel = () => {
    setIsModalVisible((prev) => !prev);
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
            const result = createPayment({
              variables: {
                createPaymentInput: {
                  roomId: router.query.detailid,
                  date,
                  start_time: startTime,
                  end_time: endTime,
                  amount: price + sidePrice,
                  guest: guest,
                  point: (price + sidePrice) / 10,
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
        onClickToggleTime={onClickToggleTime}
        choiceEndPoint={choiceEndPoint}
        requestPay={requestPay}
        onClickCancel={onClickCancel}
        clicked={clicked}
        reserved={reserved}
        reservedArr={reservedArr}
        onClickCartOpen={onClickCartOpen}
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        sidePrice={sidePrice}
        setSidePrice={setSidePrice}
      />
    </>
  );
}
