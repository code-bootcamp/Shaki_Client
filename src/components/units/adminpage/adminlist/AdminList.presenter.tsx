import * as Ad from "./AdminList.styles";

interface IAdminListUI {
  data?: any;
  onClickMoveEdit: (event) => void;
}

export default function AdminListUI(props: IAdminListUI) {
  return (
    <Ad.Wrapper>
      <Ad.TopWrapper>
        <Ad.TopLogo src="/logo.png" />
        <Ad.TopTitle>가맹점 목록</Ad.TopTitle>
      </Ad.TopWrapper>

      <Ad.Row>
        <Ad.Branch>지점명</Ad.Branch>
        <Ad.Name>룸이름</Ad.Name>
        <Ad.Remarks>한 줄 소개</Ad.Remarks>
      </Ad.Row>

      {props.data?.fetchRooms.map((el: any) => (
        <Ad.Row key={el.id} onClick={props.onClickMoveEdit}>
          <Ad.ListBranch>{el.branch.branch}</Ad.ListBranch>
          <Ad.ListName>{el.name}</Ad.ListName>
          <Ad.ListRemarks>{el.remarks}</Ad.ListRemarks>
        </Ad.Row>
      ))}
    </Ad.Wrapper>
  );
}
