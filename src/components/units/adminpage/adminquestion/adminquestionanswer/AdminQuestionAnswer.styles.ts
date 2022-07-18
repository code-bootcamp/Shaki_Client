import styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const WrapperRoot = styled.div`
  width: calc(100% - 250px);
  background-color: #f9f9f9;
  padding: 20px;
`;

export const Wrapper = styled.div`
  width: 1200px;
  padding-top: 10px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 50px;
  background-color: #ffffff;
`;

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  margin-bottom: 40px;
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
export const DivedLine = styled.div`
  border-bottom: 1px solid #999999;
  margin-bottom: 20px;
`;

export const OptionNew = styled.div`
  font-size: 18px;
`;

export const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;
export const ProfileImg = styled.img`
  width: 50px;
  margin-right: 20px;
`;

export const TitleLabel = styled.div`
  font-size: 26px;
  font-weight: 700;
  margin-right: 20px;
`;

export const EmailLabel = styled.div`
  width: 950px;
  display: flex;
  justify-content: flex-end;
  font-size: 26px;
  font-weight: 700;
`;

export const QuestionWrapper = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const QuestionLabel = styled.div`
  font-size: 26px;
  padding-left: 70px;
`;

export const QuestionContentLabel = styled.div`
  display: flex;
  padding-left: 70px;
  margin-bottom: 30px;
  font-size: 26px;
`;

export const QuestionContent = styled.div`
  width: 600px;
  overflow-wrap: break-word;
  font-size: 26px;
  margin-left: 20px;
`;

export const AnswerWrapper = styled.div``;
export const AnswerTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ReactQuillWrapper = styled.div`
  width: 100%;
  height: 280px;
`;

export const ButtonWrapper = styled.div`
  width: 1100px;
  display: flex;
  justify-content: flex-end;
`;

export const SubmitButton = styled(Button)`
  width: 150px;
  height: 50px;
  border: 1px solid #000000;
  border-radius: 15px;
  font-size: 20px;
  font-family: snas-serif;
  color: black;
`;
