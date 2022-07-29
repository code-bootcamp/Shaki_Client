import * as AD from "./AdminSideBar.styles";
import Divider from "@mui/material/Divider";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

import { useRouter } from "next/router";
import { useContext } from "react";
import { ThemeContext } from "../../../../../pages/_app";

const ADMIN_HOME = [`/adminpage`];
const ADMIN_RESERVATION = [`/adminpage/adminreservation`];
const ADMIN_QUESTION = ["/adminpage/adminquestion"];
const ADMIN_List = [`/adminpage/adminlist`];
const ADMIN_WRITE = [`/adminpage/adminwrite`];

export default function AdminSideBarUI() {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);

  const adminHome = ADMIN_HOME.includes(router.asPath);
  const adminReservation = ADMIN_RESERVATION.includes(router.asPath);
  const adminQuestion = ADMIN_QUESTION.includes(router.asPath);
  const adminList = ADMIN_List.includes(router.asPath);
  const adminWrite = ADMIN_WRITE.includes(router.asPath);

  const onClickMoveHome = () => {
    router.push("/adminpage");
  };

  const onClickMoveReservation = () => {
    router.push("/adminpage/adminreservation");
  };

  const onClickMoveQuestion = () => {
    router.push("/adminpage/adminquestion");
  };

  const onClickMoveMakeNew = () => {
    router.push("/adminpage/adminwrite");
  };

  const onClickMoveList = () => {
    router.push("/adminpage/adminlist");
  };

  return (
    <AD.Wrapper theme={theme}>
      <AD.WrapperWrapper>
        {/* 사이드바 메뉴 헤더부분 */}
        <AD.HeadWrapper>
          <AD.ImageWrapper>
            <AD.Image src="/admin.png" />
          </AD.ImageWrapper>
          <AD.HeadTitleWrapper>
            <AD.HeadTitle>MASTER</AD.HeadTitle>
          </AD.HeadTitleWrapper>
        </AD.HeadWrapper>

        {/* 사이드바 메뉴 */}
        <AD.Meuns>
          <AD.HomeWraaper onClick={onClickMoveHome}>
            {adminHome ? (
              <AD.AdminHomeBack>
                <AD.HomeIconImg />
                <AD.HomeIconDetail>관리자 홈</AD.HomeIconDetail>
              </AD.AdminHomeBack>
            ) : (
              <AD.AdminHomeBackFalse>
                <AD.HomeIconImg />
                <AD.HomeIconDetail>관리자 홈</AD.HomeIconDetail>
              </AD.AdminHomeBackFalse>
            )}
          </AD.HomeWraaper>

          <AD.AdminLabelReservationWrapper onClick={onClickMoveReservation}>
            {adminReservation ? (
              <AD.AdminQuestionBack>
                <AD.AllInboxIconImg />
                <AD.AdminLabelReservation>예약 내역</AD.AdminLabelReservation>
              </AD.AdminQuestionBack>
            ) : (
              <AD.AdminQuestionBackFalse>
                <AD.AllInboxIconImg />
                <AD.AdminLabelReservation>예약 내역</AD.AdminLabelReservation>
              </AD.AdminQuestionBackFalse>
            )}
          </AD.AdminLabelReservationWrapper>

          <AD.AdminNewWrapper onClick={onClickMoveQuestion}>
            {adminQuestion ? (
              <AD.AdminNewBack>
                <ModeEditOutlineIcon />
                <AD.AdminNew>문의 내역</AD.AdminNew>
              </AD.AdminNewBack>
            ) : (
              <AD.AdminNewBackFalse>
                <ModeEditOutlineIcon />
                <AD.AdminNew>문의 내역</AD.AdminNew>
              </AD.AdminNewBackFalse>
            )}
          </AD.AdminNewWrapper>

          <AD.AdminAnswerWrapper onClick={onClickMoveList}>
            {adminList ? (
              <AD.AdminAnswerBack>
                <AD.CommentIconImg />
                <AD.AdminAnswer>가맹점 목록</AD.AdminAnswer>
              </AD.AdminAnswerBack>
            ) : (
              <AD.AdminAnswerBackFalse>
                <AD.CommentIconImg />
                <AD.AdminAnswer>가맹점 목록</AD.AdminAnswer>
              </AD.AdminAnswerBackFalse>
            )}
          </AD.AdminAnswerWrapper>

          <AD.AdminNewWrapper onClick={onClickMoveMakeNew}>
            {adminWrite ? (
              <AD.AdminNewBack>
                <AD.ControlPointIconImg />
                <AD.AdminNew>가맹점 등록</AD.AdminNew>
              </AD.AdminNewBack>
            ) : (
              <AD.AdminNewBackFalse>
                <AD.ControlPointIconImg />
                <AD.AdminNew>가맹점 등록</AD.AdminNew>
              </AD.AdminNewBackFalse>
            )}
          </AD.AdminNewWrapper>
        </AD.Meuns>
        <Divider />
      </AD.WrapperWrapper>
    </AD.Wrapper>
  );
}
