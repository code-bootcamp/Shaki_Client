import React, { useState } from "react";
import DetailSidebarUI from "./DetailSidebar.presenter";

export default function DetailSidebarContainer() {
  const [date, setDate] = useState(null);
  const [guest, setGuest] = useState(1);
  const [ToggleGuest, setToggleGuest] = useState(false);

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [choiceEndPoint, setChoiceEndPoint] = useState<boolean>(false);

  const onClickSetStartTime = (event) => {
    setStartTime(event?.target.id);
    setChoiceEndPoint(true);
  };

  const onClickSetEndTime = (event) => {
    setEndTime(event?.target.id);
    setChoiceEndPoint(false);
  };

  const duration =
    Number(endTime.replace(":", "")) / 100 -
    Number(startTime.replace(":", "")) / 100;
  const price = duration * 20000;

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

  const onChangeDate = (newValue: any) => {
    setDate(newValue);
  };

  // 게스트 시간
  const onClickTime = () => {
    setToggleGuest((prev) => !prev);
  };

  return (
    <>
      <DetailSidebarUI
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
      />
    </>
  );
}
