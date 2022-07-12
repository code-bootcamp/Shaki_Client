import * as DS from "./DetailSidebar.styles";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useMemo } from "react";

interface IDetailSide {
  date: any;
  onChangeDate: (newValue: any) => void;
  guest: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function DetailSidebarUI(props: IDetailSide) {
  return (
    <>
      <DS.Wrapper>
        <DS.SibeHead>요금을 확인하세요.</DS.SibeHead>
        <DS.CalendarWrapper>
          <DS.Label>날짜 선택</DS.Label>
          {/* 달력 mui import */}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="날짜를 선택해주세요"
              value={props.date}
              minDate={new Date()}
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
            <DS.CheckInTime>
              <option value="08:00">08:00</option>
              <option value="10:00">10:00</option>
              <option value="12:00">12:00</option>
            </DS.CheckInTime>
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

          <DS.SubmitBtn>예약하기</DS.SubmitBtn>
        </DS.CheckWrapper>
      </DS.Wrapper>
    </>
  );
}
