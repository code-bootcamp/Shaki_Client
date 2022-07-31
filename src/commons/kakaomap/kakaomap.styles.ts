import styled from "@emotion/styled";

export const KakaoWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const KakaoBtn = styled.button`
  z-index: 1;
  position: absolute;
`;

export const KakaoMapDiv = styled.div`
  width: 100%;
  height: 100%;
  z-index: -1;
  display: ${(props: any) => (props.isToggle === true ? "none" : "block")};
`;

export const KakaoRoadView = styled.div`
  width: 100%;
  height: 100%;
  z-index: -1;
  display: ${(props: any) => (props.isToggle === true ? "block" : "none")};
`;
