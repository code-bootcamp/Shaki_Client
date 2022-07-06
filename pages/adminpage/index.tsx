import styled from "@emotion/styled";
import AdminHeaderPage from "../../src/components/commons/adminlayout/adminheader/AdminHeader.presenter";
import AdminSideBarUI from "../../src/components/commons/adminlayout/adminsidebar/AdminSideBar.presenter";
import AdminMainUI from "../../src/components/units/adminpage/adminmain/AdminMain.presenter";

const SideBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export default function AdminPage() {
  return (
    <>
      <AdminHeaderPage />
      <SideBar>
        <AdminSideBarUI />
        <AdminMainUI />
      </SideBar>
    </>
  );
}
