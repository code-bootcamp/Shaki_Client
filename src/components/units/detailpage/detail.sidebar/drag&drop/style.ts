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
`;

export const DragZone = styled.div`
  width: 30%;
  background-color: #4167ee;
  padding: 20px 10px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
