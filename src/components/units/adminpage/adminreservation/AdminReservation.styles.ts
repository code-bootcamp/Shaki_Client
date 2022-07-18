import styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const WrapperRoot = styled.div`
  width: calc(100% - 200px);
  background-color: #f9f9f9;
  padding: 20px;
  /* margin-left: 200px; */
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  /* margin: auto; */
  background-color: white;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleIcon = styled.img`
  width: 100px;
  height: 80px;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UserName = styled.label`
  padding-top: 15px;
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const RightButton = styled(Button)`
  width: 1100px;
  height: 30px;
  margin-top: 10px;
`;

export const List = styled.div`
  display: flex;
  width: 700px;
  height: 300px;
  border: 2px solid gray;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  width: 100%;
  font-size: 25px;
  font-weight: 500;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
