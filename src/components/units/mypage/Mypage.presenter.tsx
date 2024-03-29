import * as My from "./Mypage.styles";
import React, { useContext } from "react";
import { ThemeContext } from "../../../../pages/_app";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRecoilState } from "recoil";
import { BackImgUrl } from "../../../commons/store";

type room = {
  id: string;
  remarks: string;
  name: string;
  zipcode: string;
  address: string;
  images: {
    id: string;
    url: string;
    room: room;
  };
};

interface IMypageprops {
  onClickMoveDetail: (event: React.MouseEvent<HTMLDivElement>) => void;
  data?: {
    fetchLoginUser: {
      __typename?: "User";
      name: string;
      point: number;
      payment: {
        id: string;
        date: string;
        start_time: string;
        end_time: string;
        amount: number;
        room: room;
      }[];
      room: {
        id: string;
        remarks: string;
        name: string;
        zipcode: string;
        address: string;
        images: {
          id: string;
          url: string;
          room: room;
        }[];
      }[];
    };
  };
  today: any;
  point: number;
}

export default function MypageUI(props: IMypageprops) {
  const { theme } = useContext(ThemeContext);
  const [ImgUrl] = useRecoilState(BackImgUrl);
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <My.HTML theme={theme}>
      <My.Wrapper>
        <My.TopWrapper theme={theme}>
          {/* 프로필 사진, 이름 */}
          <My.UserWrapper>
            <My.UserPictureWrapper>
              <My.UserPicture src={`${ImgUrl}/profile.png`} />
            </My.UserPictureWrapper>
            <My.UserNameWrapper>
              <My.UserName>
                {props.data ? `${props.data.fetchLoginUser.name}님` : "게스트"}
              </My.UserName>
            </My.UserNameWrapper>
          </My.UserWrapper>

          {/* 포인트 */}
          <My.TopBreakPoint>
            <My.PointWrapper>
              <My.PointImgWrapper>
                <My.PointImg src={`${ImgUrl}/point.png`} />
                <My.PointLabel>적립금</My.PointLabel>
              </My.PointImgWrapper>
              <My.PointNumberWrapper>
                <My.PointNumber>
                  {props.data?.fetchLoginUser.payment.length !== 0
                    ? props.point
                    : 0}
                </My.PointNumber>
              </My.PointNumberWrapper>
            </My.PointWrapper>

            {/* 찜한 갯수 */}
            <My.PickedWrapper>
              <My.PickedImgWrapper>
                <My.PickedImg src={`${ImgUrl}/pick.png`} />
                <My.PickedLabel>찜한 갯수</My.PickedLabel>
              </My.PickedImgWrapper>
              <My.PickedNumberWrapper>
                <My.PickedNumber>
                  {props.data?.fetchLoginUser.room
                    ? props.data?.fetchLoginUser.room.length
                    : 0}
                </My.PickedNumber>
              </My.PickedNumberWrapper>
            </My.PickedWrapper>

            {/* 예약 갯수 */}
            <My.ReservationWrapper>
              <My.ReservationImgWrapper>
                <My.ReservationImg src={`${ImgUrl}/calendar.png`} />
                <My.ReservationLabel>예약 갯수</My.ReservationLabel>
              </My.ReservationImgWrapper>
              <My.ReservationNumberWrapper>
                <My.ReservationNumber>
                  {props.data?.fetchLoginUser.payment.length
                    ? props.data?.fetchLoginUser.payment.length
                    : 0}
                </My.ReservationNumber>
              </My.ReservationNumberWrapper>
            </My.ReservationWrapper>
          </My.TopBreakPoint>
        </My.TopWrapper>

        <My.BodyWrapper>
          <My.BodyTitleWrapper>
            <My.BodyTitleImg src={`${ImgUrl}/calendar_title.png`} />
            <My.BodyTitle>예약정보</My.BodyTitle>
          </My.BodyTitleWrapper>
          <My.Reservation>
            {props.data?.fetchLoginUser.payment !== [] ? (
              props.data?.fetchLoginUser.payment.map((el: any) => (
                <My.ReservationInfoWrapper>
                  <My.InfoWrapper>
                    <Slider {...settings}>
                      {/* <My.Image src={el.room?.images[0]?.url} /> */}
                      {el.room?.images.map(
                        (el: { url: string; id?: string }) => (
                          <My.Image src={`${el.url}`} />
                        )
                      )}
                    </Slider>
                    <My.Info>
                      <My.InfoDetailWrite>
                        <My.NameWrapper>
                          <My.Name>{el.room?.name}</My.Name>
                        </My.NameWrapper>
                        <My.ContentsWrapper>
                          <My.Contents>{el.room.remarks}</My.Contents>
                        </My.ContentsWrapper>
                        <My.PriceWrapper>
                          <My.Price>결제 금액: {el.amount}</My.Price>
                        </My.PriceWrapper>
                      </My.InfoDetailWrite>

                      <My.InfoDay>
                        <My.DateWrapper>
                          <My.DateImg src={`${ImgUrl}/calendar_detail.png`} />
                          <My.Date>예약 날짜: {el.date}</My.Date>
                        </My.DateWrapper>
                        <My.TimeWrapper>
                          <My.TimeImg src="/mypage/clock.png" />
                          <My.Time>
                            예약 시간: {el.start_time} 부터 ~ {el.end_time} 까지
                          </My.Time>
                        </My.TimeWrapper>
                        <My.MapWrapper>
                          <My.MapImg src={`${ImgUrl}/map.png`} />
                          <My.Map>{el.room.address}</My.Map>
                        </My.MapWrapper>
                      </My.InfoDay>
                    </My.Info>
                  </My.InfoWrapper>
                </My.ReservationInfoWrapper>
              ))
            ) : (
              <My.NodataWrapper>
                <My.Nodata>예약 정보가 없습니다.</My.Nodata>
              </My.NodataWrapper>
            )}
          </My.Reservation>

          {/* 후기 작성 부분  */}
          <My.TodayWrapper>
            <My.BodyTitleWrapper>
              <My.BodyTitleImg src={`${ImgUrl}/calendar_title.png`} />
              <My.BodyTitle>최근본 Shaki</My.BodyTitle>
            </My.BodyTitleWrapper>
            <My.Today>
              {props.today.length !== 0 ? (
                props.today.map((el: any) => (
                  <My.TodayDetailWrapper
                    id={el.id}
                    onClick={props.onClickMoveDetail}
                  >
                    <My.TodayCardWrapper>
                      <My.ListCardImg src={el.images[0].url} />
                      <My.ListCardDetailWrapper>
                        <My.ListCardName>{el.name}</My.ListCardName>
                        <My.ListCardContents>{el.remarks}</My.ListCardContents>
                      </My.ListCardDetailWrapper>
                    </My.TodayCardWrapper>
                  </My.TodayDetailWrapper>
                ))
              ) : (
                <My.NodataWrapper>
                  <My.Nodata>최근 본 Shaki가 없습니다.</My.Nodata>
                </My.NodataWrapper>
              )}
            </My.Today>
          </My.TodayWrapper>

          {/* 찜한 정보 */}
          <My.PickDetailWrapper>
            <My.PickTitleWrapper>
              <My.PickTitleImg src={`${ImgUrl}/pick_detail.png`} />
              <My.PickTitle>찜한정보</My.PickTitle>
            </My.PickTitleWrapper>
            <My.Pick>
              {props.data?.fetchLoginUser.room !== [] ? (
                props.data?.fetchLoginUser.room.map((el) => (
                  <My.PickListWrapper
                    id={el.id}
                    onClick={props.onClickMoveDetail}
                  >
                    <My.PickListCardWrapper>
                      <My.ListCardImg src={el.images[0].url} />
                      <My.ListCardDetailWrapper>
                        <My.ListCardName>{el.name}</My.ListCardName>
                        <My.ListCardContents>{el.remarks}</My.ListCardContents>
                      </My.ListCardDetailWrapper>
                    </My.PickListCardWrapper>
                  </My.PickListWrapper>
                ))
              ) : (
                <My.NoPcickListWrapper>
                  <My.NoPickListCardImg src={`${ImgUrl}/pick.png`} />
                  <My.NoPickListCardContents>
                    찜한 내용이 없습니다.
                  </My.NoPickListCardContents>
                  <My.NoPickListCardContents>
                    마음에 드시면 하트를 눌러주세요!!
                  </My.NoPickListCardContents>
                </My.NoPcickListWrapper>
              )}
            </My.Pick>
          </My.PickDetailWrapper>
        </My.BodyWrapper>
      </My.Wrapper>
    </My.HTML>
  );
}
