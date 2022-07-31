import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

export const Head = styled.div`
  font-size: 30px;
  margin-bottom: 30px;
`;

export const DragBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 150px;
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
  background-color: #4167ee;
  width: fit-content;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  padding: 5px 10px;
  margin-left: 10px;
`;

export const DragList = styled.div`
  width: 100%;
  padding: 10px 10px;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background: #4167ee;
  }
`;

export const DragZone = styled.div`
  width: 30%;
  background-color: #b9c7fa;
  padding: 20px 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  border-radius: 20px;
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
