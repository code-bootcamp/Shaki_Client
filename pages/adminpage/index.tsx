import AdminHeaderPage from "../../src/components/commons/adminlayout/adminheader/AdminHeader.presenter";
import AdminSideBarUI from "../../src/components/commons/adminlayout/adminsidebar/AdminSideBar.presenter";
import AdminMainUI from "../../src/components/units/adminpage/adminmain/AdminMain.presenter";

export default function AdminPage() {
  return (
    <>
      <AdminHeaderPage />
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <AdminSideBarUI />
        <AdminMainUI />
      </div>
    </>
  );
}
