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
const FETCH_ROOMS = gql`
  query fetchRooms {
    fetchRooms {
      id
      branch {
        branch
      }
      name
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
  const onClickOpenEdit = (event) => {
    router.push(`/adminpage/${event.currentTarget.id}/adminedit`);
  };

  const { data: roomsdata } = useQuery(FETCH_ROOMS, {
    variables: {
      id: router.query.id,
    },
  });

  return loading ? (
    <></>
  ) : (
    <>
      <AdminHeaderPage />
      <SideBar>
        <AdminSideBarUI />
        <AdminEditPresenter
          roomsdata={roomsdata}
          roomdata={data}
          isEdit={true}
          onClickOpenEdit={onClickOpenEdit}
        />
      </SideBar>
    </>
  );
}
