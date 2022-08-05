import styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const WrapperRoot = styled.div`
  width: calc(100% - 200px);
  background-color: #f9f9f9;
  padding: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
`;

export const TopLogo = styled.img`
  width: 200px;
`;

export const TopTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
  border-bottom: 5px solid #4577ef;
  margin-bottom: 18px;
`;

export const RightButton = styled(Button)`
  width: 80px;
  height: 30px;
  margin-top: 10px;
`;
