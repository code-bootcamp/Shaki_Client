import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 1px solid lightgray;
`;

export const LeftHeadWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 30%;
  @media ${breakPoints.tablet} {
    width: 50%;
  }
  @media ${breakPoints.mobile} {
    width: 70%;
  }
`;

export const LogoImg = styled.img`
  width: 100px;
  height: auto;
  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 80px;
  }
`;

export const NavMenu = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const NavTest = styled.a`
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;
  /* 마우스를 올렸을때 */
  &:hover {
    color: #4167ee;
    border-bottom: 3px solid #4167ee;
  }
  /* 마우스로 클릭할때 */
  &:active {
    font-size: 18px;
  }

  @media ${breakPoints.tablet} {
    font-size: 13px;
  }
  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 20%;
  @media ${breakPoints.tablet} {
    width: 27%;
  }
  @media ${breakPoints.mobile} {
    width: 30%;
  }
`;

export const Button = styled.button`
  width: 91px;
  height: 34px;
  border: none;
  background: #4167ee;
  color: white;
  border-radius: 5px;
  margin: 0px 10px;
  :hover {
    background-color: white;
    border: 1px solid #4167ee;
    color: #4167ee;
  }
  @media ${breakPoints.tablet} {
    width: 70px;
    height: 28px;
  }
  @media ${breakPoints.mobile} {
    width: 60px;
    height: 20px;
    font-size: 10px;
    margin: 0px 5px;
  }
`;
