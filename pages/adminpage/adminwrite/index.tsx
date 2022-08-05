import styled from "@emotion/styled";
import AdminHeaderPage from "../../../src/components/commons/adminlayout/adminheader/AdminHeader.presenter";
import AdminSideBarUI from "../../../src/components/commons/adminlayout/adminsidebar/AdminSideBar.presenter";
import AdminWrite from "../../../src/components/units/adminpage/adminwrite/AdminWrite.container";

const SideBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export default function AdminWritePage() {
  return (
    <>
      <AdminHeaderPage />
      <SideBar>
        <AdminSideBarUI />
        <AdminWrite />
      </SideBar>
    </>
  );
}
