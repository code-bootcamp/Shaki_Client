import styled from "@emotion/styled";
import AdminHeaderPage from "../../src/components/commons/adminlayout/adminheader/AdminHeader.presenter";
import AdminSideBarUI from "../../src/components/commons/adminlayout/adminsidebar/AdminSideBar.presenter";
import AdminHome from "../../src/components/units/adminpage/adminhome/AdminHome.container";

const SideBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export default function AdminHomePage() {
  return (
    <>
      <AdminHeaderPage />
      <SideBar>
        <AdminSideBarUI />
        <AdminHome />
      </SideBar>
    </>
  );
}
