import AdminHeaderPage from "./adminheader/AdminHeader.presenter";
import AdminSideBarUI from "./adminsidebar/AdminSideBar.presenter";

export default function AdminLayoutPage() {
  return (
    <div>
      <AdminHeaderPage />
      <AdminSideBarUI />
    </div>
  );
}
