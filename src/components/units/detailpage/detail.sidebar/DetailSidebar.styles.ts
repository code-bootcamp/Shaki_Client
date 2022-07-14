import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 346px;
  height: 100%;
  border: 1px solid #4167ee;
  border-radius: 15px 0px 15px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 15px;

  @media ${breakPoints.tablet} {
    margin-top: 40px;
    width: 100%;
  }
`;

export const SibeHead = styled.div`
  border-radius: 13px 0px 0px 0px;
  background-color: #4167ee;
  width: 100%;
  height: 66px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  color: white;
`;

export const SubmitBtn = styled.button`
  width: 306px;
  height: 56px;
  border: none;
  background: lightgray;
  color: black;
  margin-top: 30px;
  margin-bottom: 30px;
  :hover {
    cursor: pointer;
    background-color: #4167ee;
    color: white;
  }
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 16px;
`;

export const CheckWrapper = styled.div`
  width: 100%;
  padding: 0px 20px;
`;
// 달력 example
export const CalendarWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 0px 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media ${breakPoints.tablet} {
    width: 50%;
  }
`;

export const Calendar = styled.img`
  width: 340px;
  height: 290px;

  @media ${breakPoints.tablet} {
    width: 340px;
    height: 290px;
  }
`;

// 체크인
export const CheckInWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const CheckInTime = styled.button`
  width: 121px;
  height: 42px;
  color: #9ca0ac;
  border: 1px solid #d9dbe3;
  cursor: pointer;
  :hover {
    color: black;
  }
`;
// 시간선택시 나오는 Div
export const TimesWrapper = styled.div`
  position: absolute;
  background-color: #d9dbe3;
  border-radius: 10px;
  padding: 10px;
  /* 중앙정렬 포지션 */
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  z-index: 1;
  display: grid;
  gap: 5px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`;

export const TimeBox = styled.div`
  font-size: 14px;
  font-weight: 500;
  background-color: #f6f7fb;
  padding: 3px;
  border-radius: 3px;
  :hover {
    background-color: cornflowerblue;
    color: white;
  }
`;

export const CheckGuest = styled.div`
  width: 121px;
  height: 42px;
  border: 1px solid #d9dbe3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const GuestBtn = styled.button`
  height: 100%;
  width: 30px;
  border: none;
  cursor: pointer;
`;
// 가격
export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PriceText = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: #4167ee;
`;
