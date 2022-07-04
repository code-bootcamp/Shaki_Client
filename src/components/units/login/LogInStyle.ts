import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MiddleWrapper = styled.div`
  width: 50em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  padding-bottom: 30px;
`;

export const Head = styled.div`
  font-size: 40px;
`;

export const UpperBody = styled.div`
  display: flex;
  width: 20em;
  flex-direction: column;
  border-bottom: 3px solid gray;
  padding: 0 20px 30px 20px;
  margin-bottom: 30px;
`;

export const Email = styled.input`
  height: 40px;
`;

export const Password = styled.input`
  height: 40px;
`;

export const LowerBody = styled.div`
  width: 20em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px 30px 20px;
`;

export const Social = styled.img`
  width: 50px;
  height: 50px;
`;

export const LogIn = styled.button`
  border: none;
  width: 8em;
  height: 3em;
`;

export const Footer = styled.div`
  width: 8em;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  :hover {
    border-bottom: 1px solid black;
  }
`;
