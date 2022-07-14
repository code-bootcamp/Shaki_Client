import { useState } from "react";
import DetailSidebarUI from "./DetailSidebar.presenter";

export default function DetailSidebarContainer() {
  const [date, setDate] = useState(null);
  const [guest, setGuest] = useState(1);
  const [ToggleGuest, setToggleGuest] = useState(false);

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
      />
    </>
  );
}
