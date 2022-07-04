import * as Ad from "./AdminMain.styles";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import AdminListUI from "./adminlistup/AdminList";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function AdminMainUI() {
  return (
    <Ad.WrapperRoot>
      <Ad.Wrapper>
        <Ad.TitleWrapper>
          <Ad.IconWrapper>
            <Ad.TitleIcon src="./logo.png"></Ad.TitleIcon>
            <Ad.UserName>관리자</Ad.UserName>
          </Ad.IconWrapper>
          <Ad.RightButton>지점 등록</Ad.RightButton>
        </Ad.TitleWrapper>
        <Ad.Label>예약내역</Ad.Label>
        <div style={{ height: 400, width: "100%", padding: "10px" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
        <Ad.Label>문의내역</Ad.Label>
        <AdminListUI />
      </Ad.Wrapper>
    </Ad.WrapperRoot>
  );
}
