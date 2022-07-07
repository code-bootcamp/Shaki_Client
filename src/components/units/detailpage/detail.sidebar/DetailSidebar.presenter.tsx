import * as DS from "./DetailSidebar.styles";

export default function DetailSidebarUI() {
  return (
    <>
      <DS.Wrapper>
        <DS.SibeHead>요금을 확인하세요.</DS.SibeHead>
        <DS.CalendarWrapper>
          <DS.Label>날짜 선택</DS.Label>
          <DS.Calendar src="./detailpage/c.png" />
        </DS.CalendarWrapper>

        <DS.CheckWrapper>
          <DS.CheckInWrapper>
            <DS.Label>체크인</DS.Label>
            <DS.CheckInTime>
              <option value="08:00">08:00</option>
              <option value="10:00">10:00</option>
              <option value="12:00">12:00</option>
            </DS.CheckInTime>
          </DS.CheckInWrapper>

          <DS.CheckInWrapper>
            <DS.Label>체크아웃</DS.Label>
            <DS.CheckInTime>
              <option value="08:00">08:00</option>
              <option value="10:00">10:00</option>
              <option value="12:00">12:00</option>
            </DS.CheckInTime>
          </DS.CheckInWrapper>

          <DS.CheckInWrapper>
            <DS.Label>게스트</DS.Label>
            <DS.CheckInTime>
              <option value="08:00">08:00</option>
              <option value="10:00">10:00</option>
              <option value="12:00">12:00</option>
            </DS.CheckInTime>
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
