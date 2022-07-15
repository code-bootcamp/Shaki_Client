import styled from "@emotion/styled";
import AdminHeaderPage from "../../../../src/components/commons/adminlayout/adminheader/AdminHeader.presenter";
import AdminSideBarUI from "../../../../src/components/commons/adminlayout/adminsidebar/AdminSideBar.presenter";
import AdminQuestionAnswer from "../../../../src/components/units/adminpage/adminquestionanswer/AdminQuestionAnswer.container";
import AdminQuestionDetail from "../../../../src/components/units/adminpage/adminquestiondetail/AdminQuestionDetail.container";

const SideBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export default function AdminQuestionDetailPage() {
  return (
    <>
      <AdminHeaderPage />
      <SideBar>
        <AdminSideBarUI />
        <AdminQuestionDetail />
        <AdminQuestionAnswer />
      </SideBar>
    </>
  );
}
