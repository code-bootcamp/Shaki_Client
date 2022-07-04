import styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const WrapperRoot = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 50em;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  margin: auto;
`;

export const TitleWrapper = styled.div`
  width: 43em;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleIcon = styled.img`
  width: 70px;
  height: 60px;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UserName = styled.label`
  padding-top: 15px;
  font-size: 25px;
  font-weight: 700;
`;

export const RightButton = styled(Button)`
  width: 50px;
  height: 30px;
`;

export const List = styled.div`
  display: flex;
  width: 700px;
  height: 300px;
  border: 2px solid gray;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  width: 28em;
  font-size: 25px;
  font-weight: 500;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
