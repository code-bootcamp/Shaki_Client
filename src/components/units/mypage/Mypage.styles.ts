import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
import { Theme } from "../../../commons/styles/theme";

interface ThemeProps {
  theme: Theme;
}

export const HTML = styled.div<ThemeProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.BACKGROUND};
  color: ${({ theme }) => theme.MAIN};
  transition: all 0.9s ease-in-out;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding-left: 200px;
  padding-right: 200px;
  padding-top: 50px;

  @media ${breakPoints.tablet} {
    width: 100%;
    padding: 20px;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 20px;
  }
`;
export const TopWrapper = styled.div<ThemeProps>`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background-color: #f6f7fb; */
  border-radius: 60px 0px;
  margin-bottom: 50px;
  background: ${({ theme }) => theme.BACKGROUND};
  color: ${({ theme }) => theme.MAIN};
  transition: all 0.9s ease-in-out;

  @media ${breakPoints.tablet} {
    width: 100%;
    height: 250px;
    border-radius: 0px;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    border-radius: 0px;
    margin-bottom: 20px;
  }
`;

export const UserWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${breakPoints.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

export const UserPictureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserPicture = styled.img`
  width: 100px;
  height: 100px;

  @media ${breakPoints.tablet} {
    margin-bottom: 20px;
  }
`;

export const UserNameWrapper = styled.div`
  margin-left: 20px;
`;

export const UserName = styled.div`
  font-size: 30px;
`;

export const TopBreakPoint = styled.div`
  width: calc(100% - 300px);
  display: flex;
  justify-content: space-around;

  @media ${breakPoints.tablet} {
    width: calc(100% - 300px);
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const PointWrapper = styled.div`
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const PointImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

export const PointImg = styled.img`
  width: 40px;
`;

export const PointLabel = styled.div`
  padding-top: 5px;
  font-size: 16px;
  font-weight: 500;
`;

export const PointNumberWrapper = styled.div``;
export const PointNumber = styled.div`
  margin-right: 10px;
  font-size: 30px;
  font-weight: bold;
  color: #4167ee;
`;
export const PointName = styled.div``;

export const PickedWrapper = styled.div`
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const PickedImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60px;
`;
export const PickedImg = styled.img`
  width: 40px;
  height: 38px;
`;
export const PickedLabel = styled.div`
  margin-top: 5px;
  font-size: 16px;
  font-weight: 500;
`;
export const PickedNumberWrapper = styled.div``;
export const PickedNumber = styled.div`
  margin-top: 10px;
  font-size: 30px;
  font-weight: bold;
  color: #4167ee;
`;

export const ReservationWrapper = styled.div`
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const ReservationImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60px;
`;
export const ReservationImg = styled.img`
  width: 40px;
  height: 38px;
`;
export const ReservationLabel = styled.div`
  margin-top: 5px;
  font-size: 16px;
  font-weight: 500;
`;
export const ReservationNumberWrapper = styled.div``;
export const ReservationNumber = styled.div`
  margin-top: 10px;
  font-size: 30px;
  font-weight: bold;
  color: #4167ee;
`;

// 예약정보
export const BodyWrapper = styled.div`
  width: 100%;
`;
export const BodyTitleWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export const BodyTitleImg = styled.img`
  margin-right: 10px;

  @media ${breakPoints.mobile} {
    width: 30px;
    height: 30px;
  }
`;
export const BodyTitle = styled.div`
  color: #4167ee;
  font-size: 30px;
  font-weight: 700;

  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
`;

export const ReservationInfoWrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;
  padding: 20px;
  border: 1px solid #d9dbe3;
  border-radius: 10px;
  display: block;

  @media ${breakPoints.tablet} {
    width: 100%;
    margin-bottom: 10px;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    margin-bottom: 20px;
  }
`;
export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 30px;

  @media ${breakPoints.tablet} {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 20px;

  @media ${breakPoints.tablet} {
    width: 100%;
    margin-left: 0px;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    margin-left: 0px;
  }
`;
export const InfoDetailWrite = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media ${breakPoints.tablet} {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
  }
`;
export const Image = styled.img`
  width: 300px;
  height: 300px;

  @media ${breakPoints.tablet} {
    width: 100%;
    margin-bottom: 10px;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 150px;
    margin-bottom: 30px;
  }
`;
export const NameWrapper = styled.div`
  width: 100%;

  @media ${breakPoints.mobile} {
    width: 100%;
    margin-bottom: 10px;
  }
`;
export const Name = styled.div`
  height: 20px;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 30px;

  @media ${breakPoints.mobile} {
    font-size: 30px;
  }
`;
export const ContentsWrapper = styled.div`
  width: 100%;

  @media ${breakPoints.mobile} {
    width: 100%;
    margin-bottom: 10px;
  }
`;
export const Contents = styled.div`
  font-size: 18px;
  color: #9ca0ac;
`;
export const PriceWrapper = styled.div`
  width: 100%;

  @media ${breakPoints.mobile} {
    width: 100%;
    margin-bottom: 10px;
  }
`;
export const Price = styled.div`
  font-size: 20px;
`;

export const InfoDay = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media ${breakPoints.tablet} {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
  }
`;
export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const DateImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;

  @media ${breakPoints.mobile} {
    width: 25px;
    height: 25px;
  }
`;
export const Date = styled.div`
  font-size: 20px;
  font-weight: 700;

  @media ${breakPoints.mobile} {
    font-weight: 500;
  }
`;
export const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const TimeImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;

  @media ${breakPoints.mobile} {
    width: 25px;
    height: 25px;
  }
`;
export const Time = styled.div`
  font-size: 20px;
  font-weight: 700;

  @media ${breakPoints.mobile} {
    font-weight: 500;
  }
`;
export const MapWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const MapImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;

  @media ${breakPoints.mobile} {
    width: 25px;
    height: 25px;
  }
`;
export const Map = styled.div`
  font-size: 20px;
  font-weight: 700;

  @media ${breakPoints.mobile} {
    font-weight: 500;
  }
`;
export const KakaoMapWrapper = styled.div`
  width: 100%;
  height: 400px;

  @media ${breakPoints.tablet} {
    width: 100%;
    height: 300px;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 250px;
  }
`;

//  찜한 정보
export const PickDetailWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
`;
export const PickTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  @media ${breakPoints.tablet} {
    width: 100%;
    margin-bottom: 10px;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    margin-bottom: 10px;
  }
`;
export const PickTitleImg = styled.img`
  margin-right: 10px;

  @media ${breakPoints.mobile} {
    width: 30px;
    height: 30px;
  }
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CommentMarker = styled.img`
  width: 20px;
  height: 20px;
`;

export const CommentInput = styled.input`
  width: 40%;
  margin-left: 20px;
`;

export const PickTitle = styled.div`
  color: #4167ee;
  font-size: 30px;
  font-weight: 700;

  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
`;

export const Pick = styled.div`
  display: flex;
  flex-direction: row;
  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const Today = styled.div`
  width: 100%;
  padding-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

export const TodayWrapper = styled.div`
  width: 30%;
`;

// 찜한 정보 무한 스크롤
export const InfiniteScroll = styled.div``;

export const PickListWrapper = styled.div`
  /* width: 100%; */
  display: flex;
  /* flex-wrap: wrap; */

  @media ${breakPoints.tablet} {
    width: 100%;
    height: 800px;
    display: flex;
    justify-content: space-between;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const TodayCardWrapper = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 2px solid #d9dbe3;
  border-radius: 10px;
  background-color: #d9dbe3;
  margin-right: 20px;
  margin-bottom: 10px;

  @media ${breakPoints.mobile} {
    width: 100%;
    /* height: 250px; */
    min-height: 200px;
    margin-bottom: 20px;
    margin-right: 0px;
  }
`;

export const PickListCardWrapper = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 2px solid #d9dbe3;
  border-radius: 10px;
  background-color: #d9dbe3;
  margin-right: 20px;
  margin-bottom: 10px;

  @media ${breakPoints.tablet} {
    height: fit-content;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    /* height: 250px; */
    min-height: 200px;
    margin-bottom: 20px;
    margin-right: 0px;
  }
`;
export const ListCardImg = styled.img`
  width: 100%;
  height: 245px;
  border-radius: 10px;

  @media ${breakPoints.tablet} {
    width: 100%;
    height: 250px;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 150px;
  }
`;
export const ListCardDetailWrapper = styled.div`
  width: 100%;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 10px;
  border-radius: 0px 0px 10px 10px;
  background-color: #ffffff;
  @media ${breakPoints.mobile} {
    min-height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;
export const ListCardName = styled.div`
  font-size: 20px;
  font-weight: 700;

  @media ${breakPoints.mobile} {
    font-size: 15px;
  }
`;
export const ListCardContents = styled.div`
  font-size: 14px;
  height: fit-content;
  color: #75777e;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;
export const NoPcickListWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const NoPickListCardImg = styled.img`
  width: 40px;
  height: 40px;
`;
export const NoPickListCardContents = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #9ca0ac;
`;

export const NodataWrapper = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid #d9dbe3;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Nodata = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
