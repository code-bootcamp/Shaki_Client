import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: calc(100% - 250px);
  padding: 50px;
`;

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  margin-bottom: 40px;
`;
export const TopLogo = styled.img`
  width: 200px;
`;
export const TopTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
  border-bottom: 5px solid #4577ef;
  margin-bottom: 18px;
`;

export const Row = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #999999;
`;
export const Branch = styled.div`
  width: 200px;
  text-align: center;
`;
export const Name = styled.div`
  width: 200px;
  text-align: center;
`;
export const Remarks = styled.div`
  width: 700px;
  text-align: center;
`;
export const ListBranch = styled.div`
  width: 200px;
  text-align: center;
  cursor: pointer;
`;
export const ListName = styled.div`
  width: 200px;
  text-align: center;
  cursor: pointer;
`;
export const ListRemarks = styled.div`
  width: 700px;
  padding-left: 30px;
  cursor: pointer;
`;
