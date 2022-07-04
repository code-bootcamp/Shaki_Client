import styled from "@emotion/styled";
import AdminHeaderPage from "../../../src/components/commons/adminlayout/adminheader/AdminHeader.presenter";
import AdminSideBarUI from "../../../src/components/commons/adminlayout/adminsidebar/AdminSideBar.presenter";
import AdminWriteUI from "../../../src/components/units/adminpage/adminwrite/AdminWrite.persenter";

const SideBar = styled.div`
  display: flex;
  width: 75%;
`;

export default function AdminWritePage() {
  return (
    <>
      <AdminHeaderPage />
      <SideBar>
        <AdminSideBarUI />
        <AdminWriteUI />
      </SideBar>
    </>
  );
}
