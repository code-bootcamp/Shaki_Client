import styled from "@emotion/styled";
import AdminHeaderPage from "../../../../src/components/commons/adminlayout/adminheader/AdminHeader.presenter";
import AdminSideBarUI from "../../../../src/components/commons/adminlayout/adminsidebar/AdminSideBar.presenter";
import AdminQuestionAnswer from "../../../../src/components/units/adminpage/adminquestion/adminquestionanswer/AdminQuestionAnswer.container";
import AdminQuestionDetail from "../../../../src/components/units/adminpage/adminquestion/adminquestiondetail/AdminQuestionDetail.container";

const SideBar = styled.div`
  display: flex;
  width: 100%;
`;

export default function AdminQuestionDetailPage() {
  return (
    <>
      <AdminHeaderPage />
      <SideBar>
        <AdminSideBarUI />
        <AdminQuestionAnswer />
      </SideBar>
    </>
  );
}
