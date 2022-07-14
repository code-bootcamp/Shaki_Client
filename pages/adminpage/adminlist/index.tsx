import styled from "@emotion/styled";
import AdminHeaderPage from "../../../src/components/commons/adminlayout/adminheader/AdminHeader.presenter";
import AdminSideBarUI from "../../../src/components/commons/adminlayout/adminsidebar/AdminSideBar.presenter";
import AdminList from "../../../src/components/units/adminpage/adminlist/AdminList.container";

const SideBar = styled.div`
  display: flex;
  width: 100%;
  /* justify-content: space-between; */
`;

export default function AdminListPage() {
  return (
    <>
      <AdminHeaderPage />
      <SideBar>
        <AdminSideBarUI />
        <AdminList />
      </SideBar>
    </>
  );
}
