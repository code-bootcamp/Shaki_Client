import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const bounce = keyframes`
  from {
    transform: translateX(-400px);
    opacity: 0;
  }

  to {
    transform: translateX(2px);
    opacity: 1;
  }

`;

const deleteBounce = keyframes`
  from{
    transform: translateX(2px);
    opacity: 1;
  }
  to {
    transform: translateX(-400px);
    opacity: 0;
  }

`;

const bounceBack = keyframes`
  from {
    transform: translateX(2000px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }

`;

const deleteBounceBack = keyframes`
  from{
    transform: translateX(0px);
    opacity: 0;
  }
  to {
    transform: translateX(2000px);
    opacity: 1;
  }

`;

export const MainWrapper = styled.div`
  width: 100vw;
`;

export const MainFirstCard = styled.div`
  width: auto;
  height: 800px;
  background: url("/main/yaibawallpaper.gif") fixed;
  background-repeat: no-repeat;
  background-size: 2000px 785px;
  background-color: black;
  image-rendering: auto;
`;

export const EventBar = styled.div`
  width: 100%;
  height: 150px;
  background: url("/main/event.jpeg");
  background-size: cover;
  position: sticky;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  top: 0;
  z-index: 1;
`;

export const CardFirstImage = styled.img`
  width: 530px;
  background-image: url("/main/cardnezuko.png");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 100%;
  animation: ${(props) => (props.position ? bounce : deleteBounce)} 2s ease-out;
  animation-fill-mode: forwards;
  margin-left: 20px;
  animation-duration: 2s;
  margin-bottom: 10px;
`;

export const CardSecondImage = styled.img`
  width: 530px;
  background-image: url("/main/cardtanjiro.png");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 100%;
  margin-bottom: 10px;
  margin-right: 15px;
  animation: ${(props) => (props.position ? bounceBack : deleteBounceBack)} 2s
    ease-out;
  animation-fill-mode: forwards;

  animation-duration: 2s;
`;

export const MainSecondCard = styled.div`
  width: 100vw;
  height: 600px;
  background-image: url("/main/mainframe.png");
  background-color: wheat;
  background-size: cover;
  display: flex;
  justify-content: space-around;
  padding-top: 30px;
  animation-duration: 3s;
  animation-fill-mode: forwards;
`;

export const SecondHeader = styled.div`
  width: 50vw;
  height: 150px;
  background-image: url("/main/news.png");
  background-repeat: no-repeat;
  animation: ${(props) => (props.position ? bounce : deleteBounce)} 2s ease-out;
  animation-fill-mode: forwards;

  animation-duration: 2s;
  font-size: 6em;
  font-family: sans-serif;
  font-weight: bold;
  color: white;
  padding-left: 100px;
  cursor: pointer;
  :hover {
    text-shadow: 2px 2px red;
  }
  /* &.on {
    animation: ${bounce} 2s ease-out;
  } */
`;

// export const SecondCardImage = styled.div`
//   width: 50vw;
//   height: 700px;
//   background: url("/image/zenitsu.gif");
//   background-size: 37vw;
//   background-position: -30px 20px;
//   background-repeat: no-repeat;
//   animation: ${(props) => (props.position ? bounceBack : deleteBounceBack)} 2s
//     ease-out;
//   animation-fill-mode: forwards;

//   /* animation: ${bounceBack} 2s ease-out; */
//   animation-duration: 2s;
// `;

export const DecoOne = styled.div`
  width: 50px;
  height: 100px;
  background-image: url("/main/deco.png");
`;
export const DecoSecond = styled.div`
  width: 50px;
  height: 200px;
  background-image: url("/main/deco2.png");
`;
export const MainThirdCard = styled.div`
  width: 100%;
  height: 700px;
  background-image: url("/main/mainframe.png");
  background-color: wheat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

export const ThirdHeader = styled.div`
  width: 50vw;
  height: 150px;
  background-image: url("/main/goods.png");
  background-repeat: no-repeat;
  animation: ${(props) => (props.position ? bounce : deleteBounce)} 2s ease-out;
  animation-duration: 3s;
  animation-fill-mode: forwards;

  font-size: 3em;
  font-family: sans-serif;
  font-weight: bold;
  color: white;
  padding-left: 100px;
  cursor: pointer;
  :hover {
    text-shadow: 2px 2px red;
  }
`;

export const ThirdCardImage = styled.div`
  width: 50vw;
  height: 700px;
  background: url("/anime/tanjiroaction.gif");
  background-size: 37vw;
  background-position: -30px 20px;
  background-repeat: no-repeat;
  animation: ${(props) => (props.position ? bounceBack : deleteBounceBack)} 2s
    ease-out;
  animation-duration: 3s;
  animation-fill-mode: forwards;
`;

export const MainFourthCard = styled.div`
  width: 100%;
  height: 500px;
  background-image: url("/main/mainframe.png");
  background-color: wheat;
  background-size: cover;
  display: flex;
`;
export const FourthHeader = styled.div<{ position: any }>`
  width: 50vw;
  height: 150px;
  background-image: url("/main/eventbar.png");
  background-repeat: no-repeat;
  animation: ${(props) => (props.position ? bounce : deleteBounce)} 2s ease-out;
  animation-duration: 3s;
  font-size: 6em;
  font-family: sans-serif;
  font-weight: bold;
  color: white;
  padding-left: 100px;
  animation-fill-mode: forwards;

  cursor: pointer;
  :hover {
    text-shadow: 2px 2px red;
  }
`;

export const FourthCardImage = styled.div`
  width: 50vw;
  height: 700px;
  background: url("/anime/nezuko.gif");
  background-size: 37vw;
  background-position: -30px 20px;
  background-repeat: no-repeat;
  animation: ${(props) => (props.position ? bounceBack : deleteBounceBack)} 2s
    ease-out;
  animation-duration: 3s;
  animation-fill-mode: forwards;
`;

export const Label = styled.span`
  font-size: 15px;
  cursor: pointer;
  color: #e8a671cd;
  padding-top: 5px;
  color: wheat;
  z-index: 3;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  z-index: 2;
`;

export const ListBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-around;
`;
