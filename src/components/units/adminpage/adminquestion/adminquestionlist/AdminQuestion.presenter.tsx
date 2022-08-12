import * as Ad from "./AdminQuestion.styles";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useRecoilState } from "recoil";
import { BackImgUrl } from "../../../../../commons/store";

const columns: GridColDef[] = [
  { field: "name", headerName: "회원 이름", width: 150 },
  { field: "email", headerName: "이메일", width: 250 },
  { field: "category", headerName: "카테고리", width: 150 },
  { field: "title", headerName: "제목", width: 200 },
  { field: "content", headerName: "내용", width: 350 },
];

interface IAdminQuestionUI {
  data?: any;
  onClickMoveQuestionDetail: (event: any) => void;
}

export default function AdminQuestionUI(props: IAdminQuestionUI) {
  const [ImgUrl] = useRecoilState(BackImgUrl);
  return (
    <Ad.WrapperRoot>
      <Ad.Wrapper>
        <Ad.TopWrapper>
          <Ad.TopLogo src={`${ImgUrl}/logo.png`} />
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
