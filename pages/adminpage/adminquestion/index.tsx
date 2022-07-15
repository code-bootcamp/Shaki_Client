import styled from "@emotion/styled";
import AdminHeaderPage from "../../../src/components/commons/adminlayout/adminheader/AdminHeader.presenter";
import AdminSideBarUI from "../../../src/components/commons/adminlayout/adminsidebar/AdminSideBar.presenter";
import AdminQuestion from "../../../src/components/units/adminpage/adminquestion/AdminQuestion.container";

const SideBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export default function AdminQuestionPage() {
  return (
    <>
      <AdminHeaderPage />
      <SideBar>
        <AdminSideBarUI />
        <AdminQuestion />
      </SideBar>
    </>
  );
}
