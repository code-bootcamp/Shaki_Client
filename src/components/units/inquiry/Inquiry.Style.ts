import styled from "styled-components";

export const HTML = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Head = styled.div`
  width: 100%;
  height: 300px;
  border: none;
  background: linear-gradient(to right, #4e75ff, #91a7f2);
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
  font-weight: 400;
  font-size: 40px;
  padding: 50px 0;
`;

export const HeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeadTitle = styled.div``;

export const Logo = styled.img`
  height: 100%;
  position: relative;
  right: -450px;
`;

export const HeadItem = styled.div`
  font-size: 15px;
  opacity: 0.5;
  margin-top: 30px;
`;

export const HeadInput = styled.div``;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 30px 0;
  background: rgba(0, 0, 0, 0.05);
`;

export const BodyUpperItem = styled.div`
  width: 40%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  padding: 20px 0;
  margin-bottom: 20px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  background-color: white;
`;

export const BodyUnderItem = styled.div`
  width: 70%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  padding: 20px 0;
  margin-bottom: 20px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  background-color: white;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 50px 60px;
`;

export const FooterItem = styled.div`
  width: 40%;
  height: 300px;
  display: flex;
  flex-direction: column;
  border: none;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  align-items: center;
  padding: 20px 10px;
  font-weight: 600;
`;

export const FooterInnerText = styled.div`
  width: 100%;
  margin: 12px 0;
  padding-left: 20px;
`;
