import * as AD from "./AdminSideBar.styles";
import Divider from "@mui/material/Divider";

import { useRouter } from "next/router";

const ADMIN_HOME = [`/adminpage/adminhome`];
const ADMIN_QUESTION = [`/adminpage`];
const ADMIN_WRITE = [`/adminpage/adminwrite`];
const ADMIN_ANSWER = [`/adminpage`];

export default function AdminSideBarUI() {
  const router = useRouter();

  const adminHome = ADMIN_HOME.includes(router.asPath);
  const adminWrite = ADMIN_WRITE.includes(router.asPath);
  const adminQuestion = ADMIN_QUESTION.includes(router.asPath);
  const adminAnswer = ADMIN_ANSWER.includes(router.asPath);

  const onClickMoveHome = () => {
    router.push("/adminpage/adminhome");
  };

  const onClickMoveQuestion = () => {
    router.push("/adminpage");
  };
  const onClickMoveMakeNew = () => {
    router.push("/adminpage/adminwrite");
  };
  const onClickMoveAnswer = () => {
    router.push("/adminpage");
  };

  return (
    <AD.Wrapper>
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

          <AD.AdminLabelReservationWrapper onClick={onClickMoveQuestion}>
            {adminQuestion ? (
              <AD.AdminQuestionBack>
                <AD.AllInboxIconImg />
                <AD.AdminLabelReservation>
                  예약/문의 내역
                </AD.AdminLabelReservation>
              </AD.AdminQuestionBack>
            ) : (
              <AD.AdminQuestionBackFalse>
                <AD.AllInboxIconImg />
                <AD.AdminLabelReservation>
                  예약/문의 내역
                </AD.AdminLabelReservation>
              </AD.AdminQuestionBackFalse>
            )}
          </AD.AdminLabelReservationWrapper>
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
          <AD.AdminAnswerWrapper onClick={onClickMoveAnswer}>
            {adminAnswer ? (
              <AD.AdminAnswerBack>
                <AD.CommentIconImg />
                <AD.AdminAnswer>문의 답변 확인</AD.AdminAnswer>
              </AD.AdminAnswerBack>
            ) : (
              <AD.AdminAnswerBackFalse>
                <AD.CommentIconImg />
                <AD.AdminAnswer>문의 답변 확인</AD.AdminAnswer>
              </AD.AdminAnswerBackFalse>
            )}
          </AD.AdminAnswerWrapper>
        </AD.Meuns>
        <Divider />
      </AD.WrapperWrapper>
    </AD.Wrapper>
  );
}
