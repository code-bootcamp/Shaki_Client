import styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const WrapperRoot = styled.div`
  width: calc(100% - 250px);
  background-color: #f9f9f9;
  padding: 20px;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 10px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 50px;
  background-color: #ffffff;
`;

export const Logo = styled.img`
  width: 150px;
`;

export const OptionNew = styled.div`
  font-size: 24px;
  font-weight: 700;
  padding: 0px 10px 13px 10px;
  cursor: pointer;
`;

export const DivedLine = styled.div`
  border-bottom: 1px solid #999999;
  margin-bottom: 20px;
`;

export const TestDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;

export const TitleLabel = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const EmailLabel = styled.div`
  font-size: 0.8rem;
  margin-bottom: 0.8rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SubmitButton = styled(Button)`
  width: 120px;
  height: 40px;
  border: 1px solid #000000;
  border-radius: 15px;
  font-size: 20px;
  font-family: snas-serif;
  color: black;
`;
