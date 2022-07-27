import * as Ad from "./AdminReservation.styles";

interface IAdminReservationUI {
  data?: any;
}
export default function AdminReservationUI(props: IAdminReservationUI) {
  return (
    <Ad.WrapperRoot>
      <Ad.Wrapper>
        <Ad.TopWrapper>
          <Ad.TopLogo src="/logo.png" />
          <Ad.TopTitle>예약 목록</Ad.TopTitle>
        </Ad.TopWrapper>

        <Ad.Row>
          <Ad.UserName>회원 이름</Ad.UserName>
          <Ad.Date>날짜</Ad.Date>
          <Ad.StartTime>시작 시간</Ad.StartTime>
          <Ad.EndTime>끝 시간</Ad.EndTime>
          <Ad.Amount>가격</Ad.Amount>
          <Ad.RoomBranch>지점 명</Ad.RoomBranch>
          <Ad.RoomName>룸 이름</Ad.RoomName>
          <Ad.Guest>게스트 수</Ad.Guest>
        </Ad.Row>

        {props.data?.fetchPayments.map((el: any) => (
          <Ad.Row key={el.id}>
            <Ad.UserNameEl>{el.user.name}</Ad.UserNameEl>
            <Ad.ListDateEl>{el.date}</Ad.ListDateEl>
            <Ad.ListStartTimeEl>{el.start_time}</Ad.ListStartTimeEl>
            <Ad.ListEndTimeEl>{el.end_time}</Ad.ListEndTimeEl>
            <Ad.ListAmountEl>{el.amount}</Ad.ListAmountEl>
            <Ad.ListRoomBranchEl>{el.room.branch.branch}</Ad.ListRoomBranchEl>
            <Ad.ListRoomNameEl>{el.room.name}</Ad.ListRoomNameEl>
            <Ad.GuestEl>{el.guest}</Ad.GuestEl>
          </Ad.Row>
        ))}
      </Ad.Wrapper>
    </Ad.WrapperRoot>
  );
}
