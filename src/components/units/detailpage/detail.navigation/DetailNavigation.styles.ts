import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

interface IPage {
  id: string;
  isPosition: string;
}

export const Wrapper = styled.div`
  width: 1200px;
  height: auto;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const MenuWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const MenuName = styled.div`
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  width: 100%;
  text-align: center;
  padding: 10px;
  color: ${(props: IPage) =>
    props.id === props.isPosition ? "#4167ee" : "black"};
  border-bottom: ${(props: IPage) =>
    props.id === props.isPosition ? "2px solid #4167ee" : "none"};
  &:hover {
    color: #4167ee;
    border-bottom: 2px solid #4167ee;
  }
`;
