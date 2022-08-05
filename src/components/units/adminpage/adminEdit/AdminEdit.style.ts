import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: calc(100% - 250px);
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const TebWrapper = styled.div`
  background-color: #ffffff;
  width: 1200px;
  height: 50px;
  padding-left: 40px;
`;

export const HeadWrapper = styled.div`
  display: flex;
  width: 20%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: inline-block;
  font-weight: 800;
  &:hover .dropdownItem {
    visibility: visible;
  }
`;

export const HeaderItem = styled.div`
  height: 25px;
  display: flex;
  justify-content: center;
  font-weight: 800;
  position: relative;
  cursor: pointer;
`;

export const RoomWrapper = styled.div`
  width: 100px;
  text-align: center;
  font-size: 10px;
  font-weight: 300;
  visibility: hidden;
  position: absolute;
  z-index: 1;
  top: 25px;
`;

export const RoomItem = styled.div`
  padding: 5px;
  font-size: 13px;
  :hover {
    background-color: lightgray;
  }
`;
