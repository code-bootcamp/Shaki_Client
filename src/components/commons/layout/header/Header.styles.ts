import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { Theme } from "../../../../commons/styles/theme";

interface IPage {
  id: string;
  isPosition: string;
}

interface ThemeProps {
  theme: Theme;
}
export const Wrapper = styled.div<ThemeProps>`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 1px solid lightgray;
  background: ${({ theme }) => theme.LAYOUT};
  color: ${({ theme }) => theme.MAIN};
  transition: all 0.9s ease-in-out;
  @media ${breakPoints.tablet} {
    height: 80px;
  }
  @media ${breakPoints.mobile} {
    height: 50px;
  }
`;

export const LeftHeadWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 40%;
  @media ${breakPoints.tablet} {
    width: 60%;
  }
  @media ${breakPoints.mobile} {
    width: 70%;
  }
`;

export const LogoImg = styled.img`
  width: 100px;
  height: auto;
  @media ${breakPoints.mobile} {
    width: 50px;
  }
`;
// 메뉴선택 & 메뉴 드롭다운 구현
export const NavMenu = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const NavSubMenu = styled.div`
  display: none;
`;

export const NavText = styled.div`
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: ${(props: IPage) =>
    props.id === props.isPosition ? "18px" : "14px"};
  color: ${(props: IPage) =>
    props.id === props.isPosition ? " #4167ee" : "#808080"};
  border-bottom: ${(props: IPage) =>
    props.id === props.isPosition ? "3px solid #4167ee" : "none"};
  cursor: pointer;
  transition: 0.2s;

  /* 마우스를 올렸을때 */
  &:hover {
    color: #4167ee;
    border-bottom: 3px solid #4167ee;
    font-size: 16px;
  }
  :focus {
    font-size: 18px;
  }
  @media ${breakPoints.tablet} {
    font-size: ${(props: IPage) =>
      props.id === props.isPosition ? "15px" : "13px"};
  }
  @media ${breakPoints.mobile} {
    font-size: ${(props: IPage) =>
      props.id === props.isPosition ? "13px" : "10px"};
  }
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  &:hover .dropdown-content {
    display: block;
  }
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
  width: 95px;
  text-align: center;
`;

export const DropdownMenuWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
`;

export const DropdownTwo = styled.div`
  position: relative;
  display: block;
  &:hover .dropdown-content2 {
    display: block;
  }
`;

export const Menu2Text = styled.div`
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;
  color: #333333;
  background-color: #f6f7fb;
  padding: 3px;
  margin-top: 1px;

  /* 마우스를 올렸을때 */
  &:hover {
    color: #4167ee;
    border-bottom: 2px solid #4167ee;
  }
  @media ${breakPoints.tablet} {
    font-size: 13px;
  }
  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

export const DropdownContentTwo = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
`;

// 회원가입 / 로그인 Wrapper
export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 25%;
  @media ${breakPoints.mobile} {
    width: 35%;
  }
`;

export const IsLogedin = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserText = styled.div`
  padding: 5px;
  display: flex;
  color: gray;
  flex-direction: row;

  @media ${breakPoints.tablet} {
    align-items: center;
    flex-direction: column;
  }
  @media ${breakPoints.mobile} {
    flex-direction: column;
    align-items: center;
    font-size: 10px;
    padding: 0px;
  }
`;

export const UserName = styled.p<ThemeProps>`
  color: black;
  font-weight: 500;
  background: ${({ theme }) => theme.LAYOUT};
  color: ${({ theme }) => theme.MAIN};
  transition: all 0.9s ease-in-out;
`;

export const Button = styled.button`
  width: 91px;
  height: 34px;
  border: none;
  background: #4167ee;
  color: white;
  border-radius: 5px;
  margin: 0px 10px;
  transition: 0.2s;
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
    width: 50px;
    height: 20px;
    font-size: 10px;
    margin: 3px;
  }
  @media ${breakPoints.fold} {
    width: 47px;
    height: 18px;
    font-size: 5px;
    margin: 0;
  }
`;
