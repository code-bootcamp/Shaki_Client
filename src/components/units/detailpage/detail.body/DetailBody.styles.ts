import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 814px;
  @media ${breakPoints.mobile} {
    width: 570px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
  }
`;

export const Divedline = styled.div`
  width: 100%;
  margin-bottom: 40px;
  border-bottom: 1px solid #4167ee;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 10px;
  word-wrap: break-word;
`;

export const TagWrapper = styled.div`
  background-color: red;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SubTitle = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  color: #9ca0ac;
  margin-bottom: 20px;
  @media ${breakPoints.mobile} {
    width: 50%;
  }
`;

export const Divedline2 = styled.div`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
  border-bottom: 1px solid #d9dbe3;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const ReservationText = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #f05650;
  margin: 40px 0px 30px 0px;
`;

export const SmallLabel = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const PrecautionsMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

// 댓글
export const CommentWrapper = styled.div`
  width: 814px;
  height: 440px;
  background: #f6f7fb;
  border-radius: 10px;
  padding: 40px;
  @media ${breakPoints.mobile} {
    width: 80%;
    padding: 10px;
  }
`;
// 카카오맵
export const KakaoMapWrapper = styled.div`
  width: 814px;
  height: 450px;
  @media ${breakPoints.mobile} {
    width: 80%;
  }
`;
// 알아두어야할사항
export const PrecautionsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const ExampleWrapper = styled.div`
  background-color: lightgray;
  width: 260px;
  height: auto;
  border-radius: 15px;
  padding: 5px;
  @media ${breakPoints.mobile} {
    margin-bottom: 20px;
  }
`;
