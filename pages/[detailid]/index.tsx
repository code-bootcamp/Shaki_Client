import styled from "@emotion/styled";
import DetailBodyContainer from "../../src/components/units/detailpage/detail.body/DetailBody.container";
import DetailHeadContainer from "../../src/components/units/detailpage/detail.head/DetailHead.container";
import DetailSidebarContainer from "../../src/components/units/detailpage/detail.sidebar/DetailSidebar.container";
import { breakPoints } from "../../src/commons/styles/media";
import DetailNavContainer from "../../src/components/units/detailpage/detail.navigation/DetailNavigation.container";

const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DetailBodyWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  @media ${breakPoints.tablet} {
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  @media ${breakPoints.mobile} {
    width: 90%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default function DetailPage() {
  return (
    <DetailBox>
      <DetailNavContainer />
      <DetailHeadContainer />
      <DetailBodyWrapper>
        <DetailBodyContainer />
        <DetailSidebarContainer />
      </DetailBodyWrapper>
    </DetailBox>
  );
}
