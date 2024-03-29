import * as DS from "./DetailSidebar.styles";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DragPage from "./drag&drop";
import { ThemeContext } from "../../../../../pages/_app";

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
  zIndex: -1,
}));

interface IDetailSide {
  onChangeDate: (newValue: any) => void;
  onIncrease: () => void;
  onDecrease: () => void;
  onClickTime: () => void;
  requestPay: () => any;
  onClickCancel: () => any;
  onClickCartOpen: () => void;
  handleOk: () => void;
  handleCancel: () => void;
  onClickSetTime: (event: React.MouseEvent<HTMLButtonElement>) => void;
  price: number;
  date: any;
  guest: number;
  Nextday: any;
  MaxDay: any;
  timeTable: boolean;
  startTime: string;
  endTime: string;
  choiceEndPoint: boolean;
  hour: { start_time: string; end_time: string; reserved: boolean }[];
  clicked: string[];
  setSidePrice: any;
  reserved: string[];
  isModalVisible: boolean;
  sidePrice: number;
  option: number;
  setOption: any;
  setCart: any;
  cart: string[];
  DumDum: {
    name: string;
    price: string;
    countable: boolean;
  }[];
  setIsModalVisible: any;
  cartRef: any;
  disabled: boolean;
  add: { name: string; price: string; countable: boolean }[];
  setAdd: any;
}

export default function DetailSidebarUI(props: IDetailSide) {
  const { theme } = useContext(ThemeContext);

  return (
    <DS.Wrapper theme={theme}>
      <DS.SibeHead>요금을 확인하세요.</DS.SibeHead>
      <DS.CalendarWrapper>
        <DS.Label>날짜</DS.Label>
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
          {props.timeTable && (
            <DS.TimesWrapper theme={theme}>
              <DS.TimeHead style={{ width: "100%" }}>
                이용시간을 확인해주세요
              </DS.TimeHead>
              {props.hour.map((el, i: number) => (
                <DS.TimeBox
                  theme={theme}
                  disabled={
                    props.reserved.includes(
                      `${el.start_time} ~ ${el.end_time}`
                    ) && true
                  }
                  reserved={el.reserved}
                  value={el.start_time + "~" + el.end_time}
                  id={String(props.hour.indexOf(el))}
                  onClick={props.onClickSetTime}
                  key={uuidv4()}
                >
                  {props.hour.indexOf(el) + 1}타임 : {el.start_time} ~{" "}
                  {el.end_time}
                </DS.TimeBox>
              ))}
              <DS.TimeToggleCancel
                onClick={props.onClickCancel}
                style={{ width: "100%" }}
              >
                닫기
              </DS.TimeToggleCancel>
            </DS.TimesWrapper>
          )}
        </DS.CheckInWrapper>
        <DS.CheckInWrapper>
          <DS.Label>게스트</DS.Label>
          <DS.CheckGuest>
            <DS.GuestBtn
              disabled={props.disabled ? true : false}
              onClick={props.onDecrease}
            >
              -
            </DS.GuestBtn>
            {props.guest}
            <DS.GuestBtn
              disabled={props.disabled ? true : false}
              onClick={props.onIncrease}
            >
              +
            </DS.GuestBtn>
          </DS.CheckGuest>
        </DS.CheckInWrapper>

        <DS.TimeWrapper>
          <DS.Label>이용시간</DS.Label>
          <DS.TimeRange>
            {props.startTime <= props.endTime ? (
              <>
                <DS.StartTime readOnly value={props.startTime} />
                ~
                <DS.EndTime readOnly value={props.endTime} />
              </>
            ) : (
              <>
                <DS.StartTime readOnly value={props.startTime} />
                ~
                <DS.EndTime readOnly value={"익일 " + props.endTime} />
              </>
            )}
          </DS.TimeRange>
        </DS.TimeWrapper>
        <DS.CheckInWrapper>
          {props.isModalVisible && (
            <DS.CartBox>
              <DragPage
                setOption={props.setOption}
                setSidePrice={props.setSidePrice}
                setCart={props.setCart}
                cart={props.cart}
                DumDum={props.DumDum}
                onClickCartOpen={props.onClickCartOpen}
                handleOk={props.handleOk}
                guest={props.guest}
                setIsModalVisible={props.setIsModalVisible}
                cartRef={props.cartRef}
                add={props.add}
                setAdd={props.setAdd}
              />
            </DS.CartBox>
          )}
        </DS.CheckInWrapper>
        <DS.Option>
          <DS.Cart ref={props.cartRef} onClick={props.onClickCartOpen}>
            추가옵션 예약하기
          </DS.Cart>
          <StyledBadge badgeContent={props.option} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </DS.Option>
        <DS.OptionList>
          {props.DumDum.filter((el) =>
            props.cart?.includes(el.name + " $" + el.price)
          ).map((el) => (
            <DS.OptionWrapper>
              <DS.OptionItem>
                {el.countable ? el.name + " x " + props.guest : el.name}
              </DS.OptionItem>
              <DS.OptionItem>
                {el.countable ? props.guest * Number(el.price) : el.price}
              </DS.OptionItem>
            </DS.OptionWrapper>
          ))}
        </DS.OptionList>
        <DS.PriceWrapper>
          <DS.Label>합산가격</DS.Label>
          <DS.PriceText>{props.price + props.sidePrice}원</DS.PriceText>
        </DS.PriceWrapper>
        <DS.SubmitBtn onClick={props.requestPay}>예약하기</DS.SubmitBtn>
        <DS.Introduction>** 2 타임은 익일 12:00까지입니다. **</DS.Introduction>
      </DS.CheckWrapper>
    </DS.Wrapper>
  );
}
