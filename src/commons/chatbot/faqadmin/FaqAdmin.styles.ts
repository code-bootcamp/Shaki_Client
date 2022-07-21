import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #f9f9f999;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
  background-color: #3c3c3c;
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  padding-top: 15px;
  border-radius: 5px;
  justify-content: center;
`;

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 13px;
`;

export const SignUpForm = styled.form`
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #c9c9c9;
  background: white;
  margin: auto;
  padding: 30px;
`;
export const UserName = styled.input`
  width: 600px;
  height: 50px;
  margin-left: 10px;
  padding-left: 10px;
  background: #ffffff;
  border: 1px solid #c9c9c9;
  border-radius: 5px;
  color: black;
`;

export const UserEmail = styled.input`
  width: 600px;
  height: 50px;
  margin-left: 10px;
  margin-right: 15px;
  padding-left: 10px;
  background: #ffffff;
  border: 1px solid #c9c9c9;
  border-radius: 5px;
  color: black;
`;

export const Title = styled.input`
  width: 600px;
  height: 50px;
  margin-left: 10px;
  color: black;
  padding-left: 10px;
  background: #ffffff;
  border: 1px solid #c9c9c9;
  border-radius: 5px;
`;
export const Contents = styled.textarea`
  width: 600px;
  height: 200px;
  padding-left: 10px;
  background: #ffffff;
  border: 1px solid #c9c9c9;
  border-radius: 5px;
  color: black;
`;

export const Button = styled.button`
  width: 330px;
  height: 70px;
  background: #000000;
  color: white;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  margin-left: 10px;
  cursor: pointer;
  margin-top: 10px;
`;

export const Error = styled.div`
  color: red;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  /* or 24px */
  margin-top: 13px;
  margin-bottom: 13px;
  letter-spacing: -0.05em;

  color: #000000;
`;
