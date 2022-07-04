import { flexbox } from "@mui/system";
import AdminHeaderPage from "../../../src/components/commons/adminlayout/adminheader/AdminHeader.presenter";
import AdminSideBarUI from "../../../src/components/commons/adminlayout/adminsidebar/AdminSideBar.presenter";
import AdminWriteUI from "../../../src/components/units/adminpage/adminwrite/AdminWrite.persenter";

export default function AdminWritePage() {
  return (
    <>
      <AdminHeaderPage />
      <div style={{ display: "flex", width: "500px" }}>
        <AdminSideBarUI />
        <AdminWriteUI />
      </div>
    </>
  );
}
