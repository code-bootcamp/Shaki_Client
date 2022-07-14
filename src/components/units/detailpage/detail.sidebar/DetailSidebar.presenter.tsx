import * as DS from "./DetailSidebar.styles";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";

interface IDetailSide {
  date: any;
  onChangeDate: (newValue: any) => void;
  guest: number;
  onIncrease: () => void;
  onDecrease: () => void;
  Nextday: any;
  MaxDay: any;
  onClickTime: () => void;
  ToggleGuest: boolean;
}

const hour = [
  { time: "09:00", status: false },
  { time: "10:00", status: false },
  { time: "11:00", status: false },
  { time: "12:00", status: false },
  { time: "13:00", status: false },
  { time: "14:00", status: false },
  { time: "15:00", status: false },
  { time: "16:00", status: false },
  { time: "17:00", status: false },
  { time: "18:00", status: false },
  { time: "19:00", status: false },
  { time: "20:00", status: false },
  { time: "21:00", status: false },
  { time: "22:00", status: false },
];

export default function DetailSidebarUI(props: IDetailSide) {
  return (
    <>
      <DS.Wrapper>
        <DS.SibeHead>요금을 확인하세요.</DS.SibeHead>
        <DS.CalendarWrapper>
          <DS.Label>날짜 선택</DS.Label>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="날짜를 선택해주세요"
              value={props.date}
              minDate={props.Nextday}
              maxDate={props.MaxDay}
              inputFormat={"yyyy-MM-dd"}
              mask={"____-__-__"}
              onChange={props.onChangeDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </DS.CalendarWrapper>

        <DS.CheckWrapper>
          <DS.CheckInWrapper>
            <DS.Label>시간</DS.Label>
            <DS.CheckInTime onClick={props.onClickTime}>
              시간선택
            </DS.CheckInTime>
            {props.ToggleGuest && (
              <DS.TimesWrapper>
                {hour.map((el, i) => (
                  <DS.TimeBox
                    id={el.time}
                    onClick={
                      props.choiceEndPoint
                        ? props.onClickSetEndTime
                        : props.onClickSetStartTime
                    }
                    key={i}
                  >
                    {el.time}
                  </DS.TimeBox>
                ))}
              </DS.TimesWrapper>
            )}
          </DS.CheckInWrapper>
          <DS.CheckInWrapper>
            <DS.Label>게스트</DS.Label>
            <DS.CheckGuest>
              {/* 게스트 총 max 값 fetch해서 받아오기 */}
              <DS.GuestBtn
                disabled={props.guest === 8 ? true : false}
                onClick={props.onIncrease}
              >
                +
              </DS.GuestBtn>
              {props.guest}
              <DS.GuestBtn
                disabled={props.guest === 0 ? true : false}
                onClick={props.onDecrease}
              >
                -
              </DS.GuestBtn>
            </DS.CheckGuest>
          </DS.CheckInWrapper>
          <DS.CheckInWrapper>
            <DS.Label>체크인</DS.Label>
            <DS.PriceWrapper>
              <DS.PriceText>240,000</DS.PriceText>원
            </DS.PriceWrapper>
          </DS.CheckInWrapper>
          <DS.StartTime value={props.startTime} />
          ~
          <DS.EndTime value={props.endTime} />
          <DS.SubmitBtn>예약하기</DS.SubmitBtn>
        </DS.CheckWrapper>
      </DS.Wrapper>
    </>
  );
}
