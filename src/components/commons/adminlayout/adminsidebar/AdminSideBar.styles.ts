import styled from "@emotion/styled";
import HomeIcon from "@mui/icons-material/Home";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import CommentIcon from "@mui/icons-material/Comment";
import { Theme } from "../../../../commons/styles/theme";
interface ThemeProps {
  theme: Theme;
}

export const Wrapper = styled.div<ThemeProps>`
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  background: ${({ theme }) => theme.BACKGROUND};
  color: ${({ theme }) => theme.MAIN};
  transition: all 0.9s ease-in-out;
`;
export const WrapperWrapper = styled.div`
  width: 250px;
  position: fixed;
`;
export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Image = styled.img`
  width: 100px;
  height: 100px;
`;
export const HeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;
export const HeadTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const HeadTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
`;

export const Meuns = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const HomeWraaper = styled.div`
  width: 100%;
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    background-color: #ebeff5;
    transition-duration: 1s;
  }
`;
export const AdminHomeBack = styled.div<ThemeProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  background: ${({ theme }) => theme.BACKGROUND};
  color: ${({ theme }) => theme.MAIN};
  transition: all 0.9s ease-in-out;
`;

export const AdminHomeBackFalse = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
`;
export const HomeIconImg = styled(HomeIcon)`
  width: 30px;
  height: 30px;
`;
export const HomeIconDetail = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
export const AdminLabelReservationWrapper = styled.div`
  width: 100%;
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    background-color: #ebeff5;
    transition-duration: 1s;
  }
`;
export const AdminQuestionBack = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #f9f9f9;
`;
export const AdminQuestionBackFalse = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
`;
export const AllInboxIconImg = styled(AllInboxIcon)`
  width: 30px;
  height: 30px;
`;
export const AdminLabelReservation = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
export const AdminNewWrapper = styled.div`
  width: 100%;
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    background-color: #ebeff5;
    transition-duration: 1s;
  }
`;
export const AdminNewBack = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #f9f9f9;
`;
export const AdminNewBackFalse = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
`;
export const ControlPointIconImg = styled(ControlPointIcon)`
  width: 30px;
  height: 30px;
`;
export const AdminNew = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
export const AdminAnswerWrapper = styled.div`
  width: 100%;
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    background-color: #ebeff5;
    transition-duration: 1s;
  }
`;

export const AdminAnswerBack = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #f9f9f9;
`;
export const AdminAnswerBackFalse = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
`;
export const CommentIconImg = styled(CommentIcon)`
  width: 30px;
  height: 30px;
`;
export const AdminAnswer = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
