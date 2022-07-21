import styled from "@emotion/styled";
import DetailBodyContainer from "../../../src/components/units/detailpage/detail.body/DetailBody.container";
import DetailHeadContainer from "../../../src/components/units/detailpage/detail.head/DetailHead.container";
import DetailSidebarContainer from "../../../src/components/units/detailpage/detail.sidebar/DetailSidebar.container";
import { breakPoints } from "../../../src/commons/styles/media";
import DetailNavContainer from "../../../src/components/units/detailpage/detail.navigation/DetailNavigation.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_ROOM = gql`
  query fetchRoom($id: String!) {
    fetchRoom(id: $id) {
      star
      images {
        url
      }
      tags {
        tag
      }
      name
      remarks
      contents
      address
      reviews {
        id
        star
        user {
          name
        }
        content
      }
    }
  }
`;

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
  const router = useRouter();

  const { data } = useQuery(FETCH_ROOM, {
    variables: { id: router.query.detailid },
  });

  return (
    <DetailBox>
      <DetailNavContainer />
      <DetailHeadContainer data={data} />
      <DetailBodyWrapper>
        <DetailBodyContainer data={data} />
        <DetailSidebarContainer />
      </DetailBodyWrapper>
    </DetailBox>
  );
}
