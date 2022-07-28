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

export const searchBar = styled.input`
  margin-bottom: 20px;
`;

export const DraggableItem = styled.div`
  background-color: #4167ee;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 5px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  padding: 5px 10px;
`;

export const Introduction = styled.div`
  z-index: 1;
  position: relative;
  top: 250px;
  left: 17%;
  font-size: 30px;
  opacity: 0.5;
`;
