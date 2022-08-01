import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { Theme } from "../../../../commons/styles/theme";
interface ThemeProps {
  theme: Theme;
}

export const Wrapper = styled.div<ThemeProps>`
  width: 346px;
  height: 100%;
  border: 1px solid #4167ee;
  border-radius: 15px 0px 15px 0px;
  background: ${({ theme }) => theme.DETAILSIDEBAR};
  color: ${({ theme }) => theme.SIDEBARTEXT};
  transition: all 0.9s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 15px;

  @media ${breakPoints.tablet} {
    margin-top: 40px;
    width: 70%;
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
  margin-bottom: 10px;
  :hover {
    cursor: pointer;
    background-color: #4167ee;
    color: white;
  }
  @media ${breakPoints.tablet} {
    width: 100%;
  }
`;

export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TimeRange = styled.div`
  font-size: 15px;
  margin-top: 10px;
`;

export const StartTime = styled.input`
  width: 60px;
  padding-left: 8px;
  margin-right: 10px;
`;

export const EndTime = styled.input`
  width: 60px;
  padding-left: 8px;
  margin-left: 10px;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 16px;
  align-content: flex-end;
  padding-top: 5px;
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
    width: 100%;
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
  padding: 10px 0;
`;

export const Option = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const CheckInTime = styled.div`
  width: 121px;
  height: 42px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #9ca0ac;
  border: 1px solid #d9dbe3;
  cursor: pointer;
  :hover {
    color: black;
  }
`;

export const CartBox = styled.div`
  width: 900px;
  height: 600px;
  position: fixed;
  top: 200px;
  right: 15%;

  z-index: 1;
  background-color: white;
  @media ${breakPoints.tablet} {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
  }
`;
// 시간선택시 나오는 Div
export const TimesWrapper = styled.div<ThemeProps>`
  position: absolute;
  top: 80px;
  /* background-color: #b8bac8; */
  background: ${({ theme }) => theme.DETAILSIDEBAR};
  color: ${({ theme }) => theme.SIDEBARTEXT};
  transition: all 0.9s ease-in-out;
  transition: all 0.9s ease-in-out;
  border-radius: 10px;
  padding: 10px;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const TimeHead = styled.div`
  width: 100%;
  font-weight: 600;
`;

export const TimeBox = styled.button`
  font-size: 14px;
  font-weight: 500;
  /* background-color: #f6f7fb; */
  background-color: ${(props: { reserved: boolean }) =>
    props.reserved && "#849cf0"};
  padding: 3px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: cornflowerblue;
    color: white;
  }
  :disabled {
    background-color: gray;
    :hover {
      background-color: none;
      color: black;
      cursor: initial;
    }
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const SidePrice = styled.div``;

export const TimeToggleCancel = styled.div`
  font-weight: 600;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: 10px;
  cursor: pointer;
  :hover {
    color: #4167ee;
  }
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CheckGuest = styled.div`
  width: 121px;
  height: 42px;
  border-top: 1px solid #d9dbe3;
  border-bottom: 1px solid #d9dbe3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const GuestBtn = styled.button`
  height: 100%;
  width: 20px;
  display: flex;
  font-size: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: white;
  cursor: pointer;
  :active {
    background-color: gray;
  }
  :disabled {
    color: white;
    background-color: gray;
    opacity: 0.4;
    cursor: initial;
  }
`;
// 가격
export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const PriceText = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: #4167ee;
  align-content: flex-end;
`;

export const DragList = styled.div`
  height: 200px;
  width: 100px;
  border: 1px solid blue;
`;

export const DragZone = styled.div`
  height: 400px;
  width: 500px;
  border: 1px solid lightcoral;
`;

export const Cart = styled.div`
  margin-right: 10px;
  cursor: pointer;
  :hover {
    color: #4167ee;
  }
`;

export const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  border-top: 2px solid #4167ee;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 0;
`;

export const OptionItem = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 500;
`;

export const Introduction = styled.div`
  color: red;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 13px;
  font-weight: 500;
`;
