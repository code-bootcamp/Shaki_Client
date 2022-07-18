import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 3;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Icon = styled.div`
  width: 60px;
  height: 50px;
  margin-top: 15px;
  background-image: url("/landing/locationLogo.png");
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Body = styled.div`
  height: 95px;
  background-color: skyblue;
  padding-left: 10px;
`;

export const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const UserName = styled.label`
  width: 800px;
  height: 95px;
  display: flex;
  align-items: center;
  /* padding-top: 15px; */
  font-size: 50px;
  font-weight: 700;
  /* margin-bottom: 30px; */
  color: black;
`;

// export const TitleIcon = styled.img`
//   width: 100px;
//   height: 80px;
// `;
