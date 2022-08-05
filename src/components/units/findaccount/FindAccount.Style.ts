import styled from "@emotion/styled";

export const HTML = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

export const Head = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid #4e75ff;
  border-bottom: 2px solid #4e75ff;
  padding: 20px 0;
  margin-bottom: 20px;
`;

export const Name = styled.input`
  margin-bottom: 20px;
`;

export const Email = styled.input`
  margin-bottom: 20px;
`;

export const Phone = styled.input``;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const FindEmail = styled.div`
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  :hover {
    color: #4e75ff;
  }
`;

export const FindPwd = styled.div`
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  :hover {
    color: #4e75ff;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const FindButton = styled.button`
  width: 30%;
  border-radius: 10px;
  margin-top: 20px;
  border: none;
  background-color: #aebffc;
  font-weight: 500;
  cursor: pointer;
`;

export const CancelButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 30%;
  border-radius: 10px;
  margin-top: 20px;
  border: none;
  background-color: #aebffc;
  font-weight: 500;
  cursor: pointer;
`;

export const Box = styled.div`
  color: #4e75ff;
  font-weight: 500;
`;
