import { useState } from "react";
import DetailSidebarUI from "./DetailSidebar.presenter";
import dayjs from "dayjs";

export default function DetailSidebarContainer() {
  const [date, setDate] = useState(null);
  const [guest, setGuest] = useState(1);
  // 게스트 초기값
  const onIncrease = () => {
    setGuest((prev) => prev + 1);
  };
  const onDecrease = () => {
    setGuest((prev) => prev - 1);
  };

  const dateFormat = dayjs(date).format("YYYY-MM-DD");

  const onChangeDate = (newValue: any) => {
    setDate(newValue);
  };

  console.log(dateFormat);
  return (
    <>
      <DetailSidebarUI
        date={date}
        onChangeDate={onChangeDate}
        guest={guest}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </>
  );
}
