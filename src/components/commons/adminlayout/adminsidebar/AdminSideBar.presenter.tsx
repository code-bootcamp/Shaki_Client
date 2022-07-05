import * as AD from "./AdminSideBar.styles";
import Divider from "@mui/material/Divider";

import { useRouter } from "next/router";
import { useState } from "react";

export default function AdminSideBarUI() {
  const router = useRouter();
  const [active, setActive] = useState({
    admin: false,
    question: false,
    makeNew: false,
    answer: false,
  });

  const onClickMoveHome = () => {
    setActive({
      ...active,
      admin: true,
      question: false,
      makeNew: false,
      answer: false,
    });
    router.push("/adminpage");
  };
  const onClickMoveQuestion = () => {
    setActive({
      ...active,
      admin: false,
      question: true,
      makeNew: false,
      answer: false,
    });
    router.push("/adminpage/adminwrite");
  };
  const onClickMoveMakeNew = () => {
    setActive({
      ...active,
      admin: false,
      question: false,
      makeNew: true,
      answer: false,
    });
    router.push("/adminpage/adminwrite");
  };
  const onClickMoveAnswer = () => {
    setActive({
      ...active,
      admin: false,
      question: false,
      makeNew: false,
      answer: true,
    });
    router.push("/adminpage/adminwrite");
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
            {active.admin === true ? (
              <div style={{ backgroundColor: "#e9e9e9" }}>
                <AD.HomeIconImg />
                <AD.HomeIconDetail>관리자 홈</AD.HomeIconDetail>
              </div>
            ) : (
              <div>
                <AD.HomeIconImg />
                <AD.HomeIconDetail>관리자 홈</AD.HomeIconDetail>
              </div>
            )}
          </AD.HomeWraaper>

          <AD.AdminLabelReservationWrapper onClick={onClickMoveQuestion}>
            {active.question === true ? (
              <div style={{ backgroundColor: "#e9e9e9" }}>
                <AD.AllInboxIconImg />
                <AD.AdminLabelReservation>
                  예약/문의 내역
                </AD.AdminLabelReservation>
              </div>
            ) : (
              <div>
                <AD.AllInboxIconImg />
                <AD.AdminLabelReservation>
                  예약/문의 내역
                </AD.AdminLabelReservation>
              </div>
            )}
          </AD.AdminLabelReservationWrapper>
          <AD.AdminNewWrapper onClick={onClickMoveMakeNew}>
            {active.makeNew === true ? (
              <div style={{ backgroundColor: "#e9e9e9" }}>
                <AD.ControlPointIconImg />
                <AD.AdminNew>가맹점 등록</AD.AdminNew>
              </div>
            ) : (
              <div>
                <AD.ControlPointIconImg />
                <AD.AdminNew>가맹점 등록</AD.AdminNew>
              </div>
            )}
          </AD.AdminNewWrapper>
          <AD.AdminAnswerWrapper onClick={onClickMoveAnswer}>
            {active.answer === true ? (
              <div style={{ backgroundColor: "#e9e9e9" }}>
                <AD.CommentIconImg />
                <AD.AdminAnswer>문의 답변 확인</AD.AdminAnswer>
              </div>
            ) : (
              <div>
                <AD.CommentIconImg />
                <AD.AdminAnswer>문의 답변 확인</AD.AdminAnswer>
              </div>
            )}
          </AD.AdminAnswerWrapper>
        </AD.Meuns>
        <Divider />
      </AD.WrapperWrapper>
    </AD.Wrapper>
  );
}
