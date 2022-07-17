import * as DS from "./DetailSidebar.styles";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React, { useState } from "react";

interface IDetailSide {
  price: number;
  date: any;
  onChangeDate: (newValue: any) => void;
  guest: number;
  onIncrease: () => void;
  onDecrease: () => void;
  Nextday: any;
  MaxDay: any;
  onClickTime: () => void;
  ToggleGuest: boolean;
  startTime: string;
  endTime: string;
  choiceEndPoint: boolean;
  hour: { time: string; clicked: boolean }[];
  onClickSetEndTime: (event: React.MouseEvent<HTMLDivElement>) => void;
  onClickSetStartTime: (event: React.MouseEvent<HTMLDivElement>) => void;
  onClickPay: (data: any) => void;
}

export default function DetailSidebarUI(props: IDetailSide) {
  return (
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
          <DS.CheckInTime onClick={props.onClickTime}>시간선택</DS.CheckInTime>
          {props.ToggleGuest && (
            <DS.TimesWrapper>
              <DS.TimeHead style={{ width: "100%" }}>
                {props.choiceEndPoint
                  ? "이용 종료시간을 선택 해주세요"
                  : "이용시작시간을 선택 해주세요"}
              </DS.TimeHead>
              {props.hour.map((el, i: number) => (
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
              {/* <DS.BoxWrapper>
                  <DS.blueBox type="checkbox" /> 시작시간
                  <DS.redBox type="checkbox" /> 종료시간
                </DS.BoxWrapper> */}
            </DS.TimesWrapper>
          )}
        </DS.CheckInWrapper>
        <DS.CheckInWrapper>
          <DS.Label>게스트</DS.Label>
          <DS.CheckGuest>
            {/* 게스트 총 max 값 fetch해서 받아오기 */}
            <DS.GuestBtn onClick={props.onDecrease}>-</DS.GuestBtn>
            {props.guest}
            <DS.GuestBtn onClick={props.onIncrease}>+</DS.GuestBtn>
          </DS.CheckGuest>
        </DS.CheckInWrapper>

        <DS.TimeWrapper>
          <DS.Label>이용시간</DS.Label>
          <DS.TimeRange>
            <DS.StartTime
              readOnly
              value={props.startTime}
              // {...props.register("start_time")}
            />
            ~
            <DS.EndTime
              readOnly
              value={props.endTime}
              // {...props.register("end_time")}
            />
          </DS.TimeRange>
        </DS.TimeWrapper>
        <DS.CheckInWrapper>
          <DS.Label>가격</DS.Label>
          <DS.PriceWrapper>
            <DS.PriceText>{props.price}</DS.PriceText>원
          </DS.PriceWrapper>
        </DS.CheckInWrapper>
        <DS.SubmitBtn onClick={props.onClickPay}>예약하기</DS.SubmitBtn>
      </DS.CheckWrapper>
    </DS.Wrapper>
  );
}
