import * as DS from "./DetailSidebar.styles";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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

const houer = [
  { time: "09:00~10:00" },
  { time: "10:00~11:00" },
  { time: "11:00~12:00" },
  { time: "12:00~13:00" },
  { time: "13:00~14:00" },
  { time: "14:00~15:00" },
  { time: "15:00~16:00" },
  { time: "16:00~17:00" },
  { time: "17:00~18:00" },
  { time: "18:00~19:00" },
  { time: "19:00~20:00" },
  { time: "20:00~21:00" },
  { time: "21:00~22:00" },
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
                {houer.map((el, i) => (
                  <DS.TimeBox key={i}>{el.time}</DS.TimeBox>
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

          <DS.SubmitBtn>예약하기</DS.SubmitBtn>
        </DS.CheckWrapper>
      </DS.Wrapper>
    </>
  );
}
