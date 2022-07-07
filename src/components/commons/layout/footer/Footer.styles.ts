import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const FooterWrapper = styled.div`
  position: sticky;
  background-color: white;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
  padding: 3em;
  z-index: 4;
  @media ${breakPoints.tablet} {
    padding: 2em;
    height: 230px;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const FooterInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40%;
  height: 100%;
  z-index: 4;
`;
// 아이콘
export const TitleIcon = styled.img`
  width: 90px;
  height: auto;
  @media ${breakPoints.tablet} {
    width: 58px;
    height: auto;
  }
`;

export const SNSIcon = styled.img`
  width: 2.5em;
  height: auto;
  @media ${breakPoints.tablet} {
    width: 1.8em;
    height: auto;
  }
`;

export const FooterAddressWrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const FooterInfoTitle = styled.div`
  font-size: 1rem;
  @media ${breakPoints.tablet} {
    font-size: 0.7rem;
  }
`;

export const FooterInfoLink = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoLinkTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 8px;
  @media ${breakPoints.tablet} {
    font-size: 1rem;
    margin-bottom: 5px;
  }
`;

export const ImgDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 35%;
`;

export const AddressTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  padding-bottom: 10px;
  @media ${breakPoints.tablet} {
    font-size: 1rem;
  }
`;

export const AddressSub = styled.div`
  font-size: 1em;
  font-weight: 500;
  @media ${breakPoints.tablet} {
    font-size: 0.7em;
  }
`;

export const InfoSub = styled.div`
  font-size: 1em;
  font-weight: 500;
  @media ${breakPoints.tablet} {
    font-size: 1em;
  }
`;
