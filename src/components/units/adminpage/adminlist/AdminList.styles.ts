import styled from "@emotion/styled";
import { Theme } from "../../../../commons/styles/theme";
interface ThemeProps {
  theme: Theme;
}

export const WrapperRoot = styled.div<ThemeProps>`
  width: calc(100% - 250px);
  padding: 20px;
  overflow: scroll;
  background: ${({ theme }) => theme.BACKGROUND};
  color: ${({ theme }) => theme.MAIN};
  transition: all 0.9s ease-in-out;
`;

export const Wrapper = styled.div`
  width: 1200px;
  padding: 50px;
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

export const Row = styled.div`
  width: 1100px;
  height: 50px;
  display: flex;
  align-items: center;
  overflow: auto;
  border-bottom: 1px solid #999999;
`;
export const Branch = styled.div`
  width: 150px;
  text-align: center;
`;
export const Name = styled.div`
  width: 150px;
  text-align: center;
`;
export const Remarks = styled.div`
  width: 700px;
  text-align: center;
`;
export const ListBranch = styled.div`
  width: 150px;
  text-align: center;
  cursor: pointer;
`;
export const ListName = styled.div`
  width: 150px;
  text-align: center;
  cursor: pointer;
`;
export const ListRemarks = styled.div`
  width: 700px;
  padding-left: 30px;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  height: 40px;
  background-color: #fff;
  border: none;
  cursor: pointer;
  :hover {
    transition-duration: 2s;
    color: #ffffff;
    background-color: #4475ff;
  }
`;
