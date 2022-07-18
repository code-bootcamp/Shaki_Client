import styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const WrapperRoot = styled.div`
  width: calc(100% - 200px);
  background-color: #f9f9f9;
  padding: 20px;
  /* margin-left: 200px; */
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  /* margin: auto; */
  background-color: white;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleIcon = styled.img`
  width: 100px;
  height: 80px;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UserName = styled.label`
  padding-top: 15px;
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const RightButton = styled(Button)`
  width: 80px;
  height: 30px;
  margin-top: 10px;
`;

export const List = styled.div`
  display: flex;
  width: 700px;
  height: 300px;
  border: 2px solid gray;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  width: 100%;
  font-size: 25px;
  font-weight: 500;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

// 구현한 작업
// export const WrapperRoot = styled.form`
//   width: calc(100% - 250px);
//   background-color: #f9f9f9;
//   padding: 20px;
// `;

// export const Wrapper = styled.div`
//   width: 1200px;
//   padding: 50px;
//   background-color: #ffffff;
// `;

// export const TopWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: flex-end;
//   margin-bottom: 40px;
// `;
// export const TopLogo = styled.img`
//   width: 200px;
// `;
// export const TopTitle = styled.div`
//   font-size: 36px;
//   font-weight: 700;
//   border-bottom: 5px solid #4577ef;
//   margin-bottom: 18px;
// `;

// export const Row = styled.div`
//   width: 1100px;
//   height: 50px;
//   display: flex;
//   align-items: center;
//   overflow: auto;
//   border-bottom: 1px solid #999999;
// `;
// export const Branch = styled.div`
//   width: 150px;
//   text-align: center;
// `;
// export const Name = styled.div`
//   width: 150px;
//   text-align: center;
// `;
// export const Remarks = styled.div`
//   width: 700px;
//   text-align: center;
// `;
// export const ListBranch = styled.div`
//   width: 150px;
//   text-align: center;
//   cursor: pointer;
// `;
// export const ListName = styled.div`
//   width: 150px;
//   text-align: center;
//   cursor: pointer;
// `;
// export const ListRemarks = styled.div`
//   width: 700px;
//   padding-left: 30px;
//   cursor: pointer;
// `;

// export const DeleteButton = styled.button`
//   height: 40px;
//   background-color: #fff;
//   border: none;
//   cursor: pointer;
//   :hover {
//     transition-duration: 2s;
//     color: #ffffff;
//     background-color: #4475ff;
//   }
// `;
