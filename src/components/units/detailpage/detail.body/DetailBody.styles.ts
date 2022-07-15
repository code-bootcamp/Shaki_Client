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
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const TagDiv = styled.div`
  background: #f6f7fb;
  border: 1px solid #d9dbe3;
  border-radius: 5px;
  padding: 0px 8px;
  font-weight: 400;
  font-size: 12px;
  color: #838385;
  margin-right: 4px;
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
`;

export const PrecautionsMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

// 댓글
export const CommentHead = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${breakPoints.mobile} {
    justify-content: space-around;
  }
`;

export const CommentBtn = styled.button`
  height: 30px;
  background: #f6f7fb;
  border: 1px solid #d9dbe3;
  border-radius: 5px;
  padding: 0px 8px;
  font-weight: 400;
  font-size: 12px;
  color: #838385;
  cursor: pointer;
  :hover {
    background-color: #4167ee;
    color: white;
  }
`;

export const CommentInput = styled.textarea`
  width: 100%;
  resize: none;
`;

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

export const CommentBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 10px;
`;

export const Comment = styled.div`
  border: 1px solid black;
  padding: 10px;
  border-radius: 15px;
`;

export const CommentTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
  width: 260px;
  height: auto;
  border-radius: 15px;
  padding: 5px;
  border: 1px solid lightgray;
  @media ${breakPoints.mobile} {
    margin-bottom: 20px;
  }
`;

export const Example = styled.div`
  width: 100%;
  word-wrap: break-word;
  font-size: 14px;
  color: #9ca0ac;
`;
