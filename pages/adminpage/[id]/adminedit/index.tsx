import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import AdminHeaderPage from "../../../../src/components/commons/adminlayout/adminheader/AdminHeader.presenter";
import AdminSideBarUI from "../../../../src/components/commons/adminlayout/adminsidebar/AdminSideBar.presenter";
import AdminEditPresenter from "../../../../src/components/units/adminpage/adminEdit/AdminEdit.presenter";

const FETCH_ROOM = gql`
  query fetchRoom($id: String!) {
    fetchRoom(id: $id) {
      id
      branch {
        branch
      }
      name
      remarks
      price
      maxPeople
      contents
      zipcode
      address
      conaddressDetail
      images {
        url
      }
      tags {
        tag
      }
    }
  }
`;

const SideBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export default function AdminEditPage() {
  const router = useRouter();

  const { data, loading } = useQuery(FETCH_ROOM, {
    variables: {
      id: router.query.id,
    },
  });

  return (
    <>
      <AdminHeaderPage />
      <SideBar>
        <AdminSideBarUI />
        <AdminEditPresenter roomdata={data} isEdit={true} />;
      </SideBar>
    </>
  );
}
