import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const MiddleWrapper = styled.div`
  width: 45em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  box-shadow: 0 0 10px skyblue;
  padding: 30px 0;
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
  display: flex;
  flex-direction: column;
  padding: 0 20px 30px 20px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Social = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin-bottom: 5px;
`;

export const SocialTitle = styled.div``;

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
