import * as Ad from "./AdminQuestion.styles";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "name", headerName: "name", width: 150 },
  { field: "email", headerName: "email", width: 250 },
  { field: "category", headerName: "category", width: 150 },
  { field: "title", headerName: "title", width: 200 },
  { field: "content", headerName: "content", width: 350 },
];

interface IAdminQuestionUI {
  data?: any;
  onClickMoveQuestionDetail: (event: any) => void;
}

export default function AdminQuestionUI(props: IAdminQuestionUI) {
  return (
    <Ad.WrapperRoot>
      <Ad.Wrapper>
        <Ad.TopWrapper>
          <Ad.TopLogo src="/logo.png" />
          <Ad.TopTitle>문의 내역</Ad.TopTitle>
        </Ad.TopWrapper>
        <div style={{ height: "500px", width: "100%", padding: "20px" }}>
          <DataGrid
            rows={props.data?.fetchQuestions ? props.data?.fetchQuestions : []}
            getRowId={(row) => row.id}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            checkboxSelection
            onCellClick={props.onClickMoveQuestionDetail}
          />
        </div>
      </Ad.Wrapper>
    </Ad.WrapperRoot>
  );
}
