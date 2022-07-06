import styled from "@emotion/styled";
import AdminHeaderPage from "../../../src/components/commons/adminlayout/adminheader/AdminHeader.presenter";
import AdminSideBarUI from "../../../src/components/commons/adminlayout/adminsidebar/AdminSideBar.presenter";
import AdminHomeUI from "../../../src/components/units/adminpage/admin.home/AdminHome.presenter";

const SideBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export default function AdminHome() {
  return (
    <>
      <AdminHeaderPage />
      <SideBar>
        <AdminSideBarUI />
        <AdminHomeUI />
      </SideBar>
    </>
  );
}
