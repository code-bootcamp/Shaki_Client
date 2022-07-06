import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;

  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const MiddleWrapper = styled.div`
  width: 45em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid #4e75ff;
  box-shadow: 0 0 10px skyblue;
  padding: 30px 0;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Head = styled.div`
  font-size: 40px;
  margin-bottom: 1em;
`;

export const UpperBody = styled.div`
  display: flex;
  width: 20em;
  flex-direction: column;
  border-bottom: 3px solid #4e75ff;
  padding: 0 20px 30px 20px;
  margin-bottom: 30px;
`;

export const Email = styled.input`
  height: 40px;
  border: none;
  background-color: #4e75ff;
  opacity: 0.2;
`;

export const Password = styled.input`
  height: 40px;
  border: none;
  background-color: #4e75ff;
  opacity: 0.2;
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

  @media ${breakPoints.mobile} {
    display: none;
  }
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
  width: 6em;
  height: 3em;
  cursor: pointer;
`;

export const Footer = styled.div`
  width: 7em;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
  :hover {
    border-bottom: 2px solid #4e75ff;
  }
`;

export const MobileBox = styled.div`
  display: none;

  @media ${breakPoints.mobile} {
    display: block;
  }
`;
