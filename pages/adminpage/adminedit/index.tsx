import styled from "@emotion/styled";
import AdminHeaderPage from "../../../src/components/commons/adminlayout/adminheader/AdminHeader.presenter";
import AdminSideBarUI from "../../../src/components/commons/adminlayout/adminsidebar/AdminSideBar.presenter";
import AdminEditPresenter from "../../../src/components/units/adminpage/adminEdit/AdminEdit.presenter";

export default function AdminEditPage() {
  const SideBar = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
  `;

  return (
    <>
      <AdminHeaderPage />
      <SideBar>
        <AdminSideBarUI />
        <AdminEditPresenter />;
      </SideBar>
    </>
  );
}
