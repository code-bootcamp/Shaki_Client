import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.div`
  border-top: 10px solid #b9c7fa;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

export const Head = styled.div`
  font-size: 30px;
  margin-bottom: 30px;

  @media ${breakPoints.tablet} {
    margin-bottom: 60px;
  }
`;

export const DragBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 150px;
  @media ${breakPoints.tablet} {
    flex-direction: column;
  }
  @media ${breakPoints.mobile} {
    flex-direction: column;
    /* width: 500px; */
    /* height: auto; */
  }
`;

export const optionList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const optionItem = styled.div`
  width: 30%;
`;

export const DraggableItem = styled.div`
  /* width: 100%; */
  height: 30px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  padding: 5px 10px;
  margin-left: 10px;
  :hover {
    background-color: #4167ee;
    color: white;
  }

  @media ${breakPoints.tablet} {
    height: auto;
  }
  @media ${breakPoints.mobile} {
    height: auto;
    font-size: 12px;
    padding: 0;
  }
`;

export const DragList = styled.div`
  width: 40%;
  height: 400px;
  padding: 10px 10px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background: #4167ee;
  }

  @media ${breakPoints.tablet} {
    width: 100%;
    min-height: 200px;
    margin-bottom: 20px;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const DragZone = styled.div`
  width: 40%;
  height: 400px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
  border: 1px solid black;
  border-radius: 20px;
`;

export const OkButton = styled.div`
  width: 70px;
  height: 30px;
  position: absolute;
  bottom: 3%;
  right: 100px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 20px;
  background-color: #b9c7fa;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: #4167ee;
    color: white;
  }
`;

export const CancelButton = styled.div`
  width: 50px;
  height: 30px;
  position: absolute;
  bottom: 3%;
  right: 50px;
  cursor: pointer;
  border-radius: 20px;
  background-color: #b9c7fa;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: #4167ee;
    color: white;
  }
`;
