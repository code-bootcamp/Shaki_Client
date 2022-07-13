import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #f0f0f0;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
  background-color: skyblue;
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  padding-top: 7px;
  border-radius: 10px;
`;

export const Icon = styled.div`
  width: 60px;
  height: 50px;
  background-image: url("/landing/locationLogo.png");
  background-size: contain;
  background-repeat: no-repeat;
`;

export const SignUpForm = styled.form`
  width: 800px;
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
  width: 300px;
  height: 50px;

  padding-left: 10px;
  background: #ffffff;
  border: 1px solid #c9c9c9;
  border-radius: 5px;
`;

export const UserEmail = styled.input`
  width: 300px;
  height: 50px;

  padding-left: 10px;
  background: #ffffff;
  border: 1px solid #c9c9c9;
  border-radius: 5px;
`;

export const Title = styled.input`
  width: 300px;
  height: 50px;
  padding-left: 10px;
  background: #ffffff;
  border: 1px solid #c9c9c9;
  border-radius: 5px;
`;
export const Contents = styled.textarea`
  width: 500px;
  height: 200px;
  padding-left: 10px;
  background: #ffffff;
  border: 1px solid #c9c9c9;
  border-radius: 5px;
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
