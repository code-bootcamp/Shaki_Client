import * as AD from "./AdminSideBar.styles";

export default function AdminSideBarUI() {
  return (
    <AD.Wrapper>
      <AD.HeadWrapper>
        <AD.Head>관리자 메인</AD.Head>
      </AD.HeadWrapper>

      <AD.Meuns>
        <AD.AdminLabelReservation>예약/문의 내역</AD.AdminLabelReservation>
        <AD.AdminLabelNew>가맹점 등록하기</AD.AdminLabelNew>
        <AD.AdminLabelAnser>문의 답변 보내기</AD.AdminLabelAnser>
      </AD.Meuns>
    </AD.Wrapper>
  );
}
