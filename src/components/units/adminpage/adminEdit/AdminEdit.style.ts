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
  position: relative;
  display: inline-block;
  font-weight: 800;
  &:hover .dropdownItem {
    display: block;
  }
`;

export const HeaderItem = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 800;
`;

export const RoomWrapper = styled.div`
  font-size: 10px;
  font-weight: 300;
  display: none;
  position: absolute;
  z-index: 1;
`;

export const RoomItem = styled.div`
  padding: 5px;
  font-size: 13px;
  :hover {
    background-color: lightgray;
  }
`;
