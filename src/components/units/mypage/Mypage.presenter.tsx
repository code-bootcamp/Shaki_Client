import * as MY from "./Mypage.styles";

export default function MypageUI() {
  return (
    <MY.Wrapper>
      <MY.TopWrapper>
        {/* 프로필 사진, 이름 */}
        <MY.UserWrapper>
          <MY.UserPictureWrapper>
            <MY.UserPicture src="/mypage/profile.png" />
          </MY.UserPictureWrapper>
          <MY.UserNameWrapper>
            <MY.UserName>홍길동 님</MY.UserName>
          </MY.UserNameWrapper>
        </MY.UserWrapper>

        {/* 포인트 */}
        <MY.PointWrapper>
          <MY.PointImgWrapper>
            <MY.PointImg src="/mypage/point.png" />
          </MY.PointImgWrapper>
          <MY.PointNumberWrapper>
            <MY.PointNumber>0</MY.PointNumber>
            <MY.PointName>point</MY.PointName>
          </MY.PointNumberWrapper>
        </MY.PointWrapper>

        {/* 찜한 갯수 */}
        <MY.PickedWrapper>
          <MY.PickedImgWrapper>
            <MY.PickedImg src="/mypage/pick.png" />
            <MY.PickedLabel>찜한 갯수</MY.PickedLabel>
          </MY.PickedImgWrapper>
          <MY.PickedNumberWrapper>
            <MY.PickedNumber>0</MY.PickedNumber>
          </MY.PickedNumberWrapper>
        </MY.PickedWrapper>

        {/* 예약 갯수 */}
        <MY.ReservationWrapper>
          <MY.ReservationImgWrapper>
            <MY.ReservationImg src="/mypage/calendar.png" />
            <MY.ReservationLabel>예약 갯수</MY.ReservationLabel>
          </MY.ReservationImgWrapper>
          <MY.ReservationNumberWrapper>
            <MY.ReservationNumber>0</MY.ReservationNumber>
          </MY.ReservationNumberWrapper>
        </MY.ReservationWrapper>
      </MY.TopWrapper>

      <MY.BodyWrapper>
        <MY.BodyTitleWrapper>
          <MY.BodyTitleImg src="/mypage/calendar_title.png" />
          <MY.BodyTitle>예약정보</MY.BodyTitle>
        </MY.BodyTitleWrapper>

        <MY.ReservationInfoWrapper>
          <MY.InfoWrapper>
            <MY.Image src="/mypage/example.png" />
            <MY.InfoDetail>
              <MY.NameWrapper>
                <MY.Name>구로점 쉐이키 1</MY.Name>
              </MY.NameWrapper>
              <MY.ContentsWrapper>
                <MY.Contents>
                  깔끔하고 모던한 느낌으로 품격있는 식사를 하고 싶은 분들을 위한
                  룸입니다.
                </MY.Contents>
              </MY.ContentsWrapper>
              <MY.PriceWrapper>
                <MY.Price>결제 금액: 200,000원</MY.Price>
              </MY.PriceWrapper>

              <MY.DateWrapper>
                <MY.DateImg src="/mypage/calendar_detail.png" />
                <MY.Date>예약 날짜: 2022.07.12</MY.Date>
              </MY.DateWrapper>
              <MY.TimeWrapper>
                <MY.TimeImg src="/mypage/clock.png" />
                <MY.Time>예약 시간: 12:00</MY.Time>
              </MY.TimeWrapper>
              <MY.MapWrapper>
                <MY.MapImg src="/mypage/map.png" />
                <MY.Map>
                  서울특별시 구로구 디지털로 300 패스트파이브 구로점
                </MY.Map>
              </MY.MapWrapper>
            </MY.InfoDetail>
          </MY.InfoWrapper>
        </MY.ReservationInfoWrapper>

        <MY.PickDetailWrapper>
          <MY.PickTitleWrapper>
            <MY.PickTitleImg src="/mypage/pick_detail.png" />
            <MY.PickTitle>찜한정보</MY.PickTitle>
          </MY.PickTitleWrapper>

          <MY.PickListWrapper>
            <MY.PickListCardWrapper>
              <MY.ListCardImg src="/mypage/example.png" />
              <MY.ListCardDetailWrapper>
                <MY.ListCardName>구로점 쉐이키 1</MY.ListCardName>
                <MY.ListCardContents>
                  깔끔하고 모던한 느낌으로 품격있는 식사를 하고 싶은 분들을 위한
                  룸 입니다.
                </MY.ListCardContents>
              </MY.ListCardDetailWrapper>
            </MY.PickListCardWrapper>
          </MY.PickListWrapper>
        </MY.PickDetailWrapper>
      </MY.BodyWrapper>
    </MY.Wrapper>
  );
}
