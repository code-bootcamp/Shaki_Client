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
          <Ad.UserName>User Name</Ad.UserName>
          <Ad.Date>Date</Ad.Date>
          <Ad.StartTime>StartTime</Ad.StartTime>
          <Ad.EndTime>EndTime</Ad.EndTime>
          <Ad.Amount>amount</Ad.Amount>
          <Ad.RoomBranch>Branch Name</Ad.RoomBranch>
          <Ad.RoomName>Room Name</Ad.RoomName>
          <Ad.Guest>Guest</Ad.Guest>
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
