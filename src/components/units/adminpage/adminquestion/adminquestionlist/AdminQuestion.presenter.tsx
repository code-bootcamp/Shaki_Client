import * as Ad from "./AdminQuestion.styles";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "name", headerName: "name", width: 200 },
  { field: "email", headerName: "email", width: 200 },
  { field: "category", headerName: "category", width: 150 },
  { field: "content", headerName: "content", width: 200 },
  { field: "title", headerName: "title", width: 200 },
];

interface IAdminQuestionUI {
  data?: any;
  onClickMoveQuestionDetail: (event: any) => void;
}

export default function AdminQuestionUI(props: IAdminQuestionUI) {
  return (
    <Ad.WrapperRoot>
      <Ad.Wrapper>
        <Ad.TitleWrapper></Ad.TitleWrapper>
        <Ad.Label>문의 내역</Ad.Label>
        <div style={{ height: 500, width: "100%", padding: "10px" }}>
          <DataGrid
            rows={props.data?.fetchQuestions ? props.data?.fetchQuestions : []}
            getRowId={(row) => row.id}
            id={props.data?.fetchQuestions.id}
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
