import React, { useState } from "react";
import { getTime } from "../../../commons/getDate";
import DetailSidebarUI from "./DetailSidebar.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CREATE_PAYMENT } from "./DetailSibebar.queries";
import { useMutation } from "@apollo/client";

const hour = [
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

const schema = yup.object({
  date: yup.string().required("필수 입력값입니다."),
  start_time: yup.string().required("필수 입력값입니다."),
  end_time: yup.string().required("필수 입력값입니다."),
  guest: yup.number().required("필수 입력값입니다."),
  amount: yup.number().required("필수 입력값입니다."),
  roomId: yup.string(),
});

export default function DetailSidebarContainer() {
  const { handleSubmit, formState, register } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const [createPayment] = useMutation(CREATE_PAYMENT);

  const [date, setDate] = useState("");
  const [guest, setGuest] = useState(1);
  const [ToggleGuest, setToggleGuest] = useState(false);

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [choiceEndPoint, setChoiceEndPoint] = useState<boolean>(false);

  const onClickSetStartTime = (data: React.MouseEvent<HTMLDivElement>) => {
    setStartTime((data.target as HTMLDivElement).id);
    setChoiceEndPoint(true);

    console.log((data.target as HTMLDivElement).id);
  };

  const onClickSetEndTime = (data: React.MouseEvent<HTMLDivElement>) => {
    if ((data.target as HTMLDivElement).id < startTime) {
      alert("예약시작 이후의 시간을 골라주세요");
      return;
    } else {
      setEndTime((data.target as HTMLDivElement).id);
      setChoiceEndPoint(false);
      setToggleGuest((prev) => !prev);
    }
  };

  const duration =
    Number(endTime.replace(":", "")) / 100 -
    Number(startTime.replace(":", "")) / 100;
  let price = 0;
  if (duration < 0) {
    price = 0;
  } else {
    price = duration * 20000;
  }

  // 게스트 초기값
  const onIncrease = () => {
    setGuest((prev) => prev + 1);
  };
  const onDecrease = () => {
    setGuest((prev) => prev - 1);
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

  // 게스트 시간
  const onClickTime = () => {
    setToggleGuest((prev) => !prev);
  };

  return (
    <>
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
        handleSubmit={handleSubmit}
        formState={formState}
        register={register}
      />
    </>
  );
}
