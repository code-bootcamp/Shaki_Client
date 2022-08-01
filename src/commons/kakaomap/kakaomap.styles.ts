import styled from "@emotion/styled";

export const KakaoWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const KakaoBtn = styled.button`
  z-index: 1;
  position: absolute;
  height: 30px;
  background: #f6f7fb;
  border: 1px solid #d9dbe3;
  border-radius: 5px;
  padding: 0px 8px;
  font-weight: 400;
  font-size: 12px;
  color: #838385;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    background-color: lightgray;
    color: black;
  }
`;

export const KakaoMapDiv = styled.div`
  width: 100%;
  height: 100%;
  z-index: 0;
  display: ${(props: any) => (props.isToggle === true ? "none" : "block")};
`;

export const KakaoRoadView = styled.div`
  width: 100%;
  height: 100%;
  z-index: 0;
  display: ${(props: any) => (props.isToggle === true ? "block" : "none")};
`;
