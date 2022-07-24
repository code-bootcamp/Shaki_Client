import * as DS from "./DetailSidebar.styles";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Modal } from "antd";
import DragPage from "./drag&drop";

declare const window: typeof globalThis & {
  IMP: any;
};

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: "2px solid ${theme.palette.background.paper}",
    padding: "0 4px",
  },
}));

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
  hour: { start_time: string; end_time: string; reserved: boolean }[];
  onClickToggleTime: (event: React.MouseEvent<HTMLButtonElement>) => void;
  // onClickSetEndTime: (event: React.MouseEvent<HTMLDivElement>) => void;
  // onClickSetStartTime: (event: React.MouseEvent<HTMLDivElement>) => void;
  requestPay: () => any;
  onClickCancel: () => any;
  clicked: string[];
  setSidePrice: any;
}

// const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
//   "& .MuiBadge-badge": {
//     right: -3,
//     top: 13,
//     border: 2px solid ${theme.palette.background.paper},
//     padding: "0 4px",
//   },
// }));

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
                이용시간을 확인해주세요
              </DS.TimeHead>
              {props.hour.map((el, i: number) => (
                <DS.TimeBox
                  disabled={
                    props.reservedArr.includes(
                      `${el.start_time} ~ ${el.end_time}`
                    ) && true
                  }
                  // disabled
                  reserved={el.reserved}
                  value={el.start_time + "~" + el.end_time}
                  id={String(i)}
                  onClick={
                    props.onClickToggleTime
                    // props.choiceEndPoint
                    //   ? props.onClickSetEndTime
                    //   : props.onClickSetStartTime
                  }
                  key={uuidv4()}
                >
                  {el.start_time} ~ {el.end_time}
                </DS.TimeBox>
              ))}
              <div onClick={props.onClickCancel} style={{ width: "100%" }}>
                닫기
              </div>
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
            <DS.StartTime readOnly value={props.startTime} />
            ~
            <DS.EndTime readOnly value={props.endTime} />
          </DS.TimeRange>
        </DS.TimeWrapper>
        <DS.CheckInWrapper>
          {props.isModalVisible && (
            <Modal
              visible={true}
              onCancel={props.handleCancel}
              footer={[
                <div>
                  <div onClick={props.handleOk}>확인</div>
                  <div style={{ fontWeight: "700" }}>${props.sidePrice}</div>
                </div>,
              ]}
            >
              <DragPage setSidePrice={props.setSidePrice} />
            </Modal>
          )}

          <DS.Label>가격</DS.Label>
          <DS.PriceWrapper>
            <DS.PriceText>{props.price + props.sidePrice}</DS.PriceText>원
          </DS.PriceWrapper>
        </DS.CheckInWrapper>
        <IconButton aria-label="cart">
          <DS.Cart onClick={props.onClickCartOpen}>추가옵션 예약하기</DS.Cart>
          <StyledBadge badgeContent={3} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
        <DS.SubmitBtn onClick={props.requestPay}>예약하기</DS.SubmitBtn>
      </DS.CheckWrapper>
    </DS.Wrapper>
  );
}
