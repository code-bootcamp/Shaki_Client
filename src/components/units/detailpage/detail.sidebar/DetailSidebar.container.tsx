import React, { useEffect, useRef, useState } from "react";
import { getTime } from "../../../commons/getDate";
import DetailSidebarUI from "./DetailSidebar.presenter";
import { CREATE_PAYMENT, FETCH_RESERVATION } from "./DetailSibebar.queries";
import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Head from "next/head";
import { useRecoilState } from "recoil";
import { accessTokenState, reservedState } from "../../../../commons/store";

declare const window: typeof globalThis & {
  IMP: any;
};

type timeTable = {
  start_time: string;
  end_time: string;
  reserved: boolean;
};

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

const DumDum = [
  {
    name: "🍞 식전빵",
    price: "5000",
    countable: true,
  },
  {
    name: "🍷 웰컴쥬스 (1pet)",
    price: "4000",
    countable: true,
  },
  {
    name: "🍽️ 식기 기본세팅(예약한 인원수)",
    price: "10000",
    countable: false,
  },
  {
    name: "🍺 생맥주",
    price: "3000",
    countable: true,
  },
  {
    name: "🧂 소금,후추 각종 향신료",
    price: "3000",
    countable: false,
  },
  {
    name: "사용 후 애프터서비스",
    price: "3000",
    countable: false,
  },
  {
    name: "🧹 애프터 청소서비스",
    price: "10000",
    countable: false,
  },
  {
    name: "🔉 블루투스 스피커",
    price: "8000",
    countable: false,
  },
];

export default function DetailSidebarContainer() {
  const router = useRouter();
  const client = useApolloClient();

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const cartRef = useRef(null);

  const [date, setDate] = useState<string>("");
  const [guest, setGuest] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [sidePrice, setSidePrice] = useState<number>(0);
  const [option, setOption] = useState<number>(0);
  const [choiceEndPoint, setChoiceEndPoint] = useState<boolean>(false);
  const [timeTable, setTimeTable] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [reserved, setReserved] = useRecoilState<any>(reservedState);
  const [clicked, setClicked] = useState<string[]>([]);
  const [cart, setCart] = useState<string[]>([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [add, setAdd] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const [createPayment] = useMutation(CREATE_PAYMENT);

  const onClickToggleTime = (event: React.MouseEvent<HTMLButtonElement>) => {
    hour[Number(event.currentTarget.id)].reserved = true;
    console.log(clicked);
    if (clicked === []) {
      const newClicked = [];
      newClicked.push((event.target as HTMLButtonElement).value);
      setStartTime(clicked[0].slice(0, 2));
      setEndTime(clicked[0].slice(-5));
      setClicked(newClicked);
      return;
    } else {
      const newClicked = [...clicked];
      if (newClicked.includes((event.target as HTMLButtonElement).value)) {
        hour[Number(event.currentTarget.id)].reserved = false;
        setClicked(
          newClicked.filter(
            (el) => el !== (event.target as HTMLButtonElement).value
          )
        );
      } else {
        newClicked.push((event.target as HTMLButtonElement).value);
        setEnd(Number((event.target as HTMLButtonElement).value.slice(0, 2)));
        setClicked(newClicked);
        setStartTime(String(clicked[0]?.slice(0, 5)));
        setEndTime(String(clicked.at(-1)?.slice(6)));
      }

      return;
    }
  };

  const onClickCancel = () => {
    setTimeTable((prev) => !prev);
    setStart(NaN);
  };

  useEffect(() => {
    setStartTime(clicked.length === 0 ? "" : clicked[0].slice(0, 5));
    setEndTime(
      clicked.length === 0 ? "" : clicked[clicked.length - 1].slice(6)
    );
    setStart(Number(clicked[0]?.slice(0, 2)));
    clicked.sort(function (a: string, b: string) {
      return Number(a.slice(0, 2)) - Number(b.slice(0, 2));
    });

    for (let i = 0; i < hour.length; i++) {
      if (start < end) {
        if (
          Number(hour[i].start_time.slice(0, 2)) >= start &&
          Number(hour[i].start_time.slice(0, 2)) <= end
        ) {
          hour[i].reserved = true;
        } else {
          hour[i].reserved = false;
        }
      } else {
        if (
          Number(hour[i].start_time.slice(0, 2)) <= start &&
          Number(hour[i].start_time.slice(0, 2)) >= end
        ) {
          hour[i].reserved = true;
        } else {
          hour[i].reserved = false;
        }
      }
    }
    if (isNaN(start) || isNaN(end)) {
      setPrice(20000);
      for (let i = 0; i < hour.length; i++) {
        hour[i].reserved = false;
      }
    } else {
      if (end < start) {
        setPrice((start - end + 1) * 20000);
      } else {
        setPrice((end - start + 1) * 20000);
      }
    }
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
    if (!date) {
      alert("날짜를 선택해주세요.");
    } else {
      setTimeTable((prev) => !prev);
    }
    return;
  };

  // 다음날짜 구하기
  const Nextday = new Date();
  Nextday.setDate(Nextday.getDate() + 1);
  // maxDate 30일
  const MaxDay = new Date();
  MaxDay.setDate(MaxDay.getDate() + 30);

  const onChangeDate = async (newValue: string) => {
    const date = getTime(newValue);
    setDisabled(false);
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
    setCart([]);
    setAdd([]);
    if (guest === 0) {
      alert("예약 인원을 설정해주세요.");
    } else {
      setIsModalVisible((prev) => !prev);
    }
  };

  const handleOk = () => {
    setDisabled(true);
    setIsModalVisible((prev) => !prev);
  };

  const handleCancel = () => {
    setIsModalVisible((prev) => !prev);
  };

  const requestPay = () => {
    if (!accessToken) {
      alert("로그인 후 이용해주세요");
      router.push("/login");
    } else if (!price || !date || !startTime || !endTime) {
      alert("필수 정보를 입력해주세요.");
      return;
    } else {
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
                    impUid: "imp49910675",
                  },
                },
              });
              alert("결제 되었습니다. 마이페이지로 이동합니다.");
              router.push("/mypage");
            } catch (error) {
              alert("결제에 실패하였습니다.");
            }
          } else {
            // ...,
            // 결제 실패 시 로직,
            // ...
            alert("결제가 취소되었습니다.");
          }
        }
      );
    }
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
        DumDum={DumDum}
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
        timeTable={timeTable}
        startTime={startTime}
        endTime={endTime}
        onClickToggleTime={onClickToggleTime}
        choiceEndPoint={choiceEndPoint}
        requestPay={requestPay}
        onClickCancel={onClickCancel}
        clicked={clicked}
        reservedArr={reservedArr}
        onClickCartOpen={onClickCartOpen}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        sidePrice={sidePrice}
        setSidePrice={setSidePrice}
        option={option}
        setOption={setOption}
        cart={cart}
        setCart={setCart}
        cartRef={cartRef}
        add={add}
        setAdd={setAdd}
        disabled={disabled}
      />
    </>
  );
}
