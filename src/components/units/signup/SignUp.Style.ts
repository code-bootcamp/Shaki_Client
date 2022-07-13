import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const flip = keyframes`
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(180deg);
    }
`;

const unFlip = keyframes`
from {
  transform: rotateY(180deg);
}
to {
  transform: rotateY(0deg);
}
`;

const pullUp = keyframes`
  from {
    margin-top: 0;
  } to {
    margintop: -300px;
  }
`;

const pullDown = keyframes`
  from {
    margin-top: -300px;
  } to {
    margin-top: 0;
  }
`;

const appeared = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const WrapperRoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const WrapperImg = styled.div`
  border-radius: 10px;
  display: flex;
  width: 150em;
  height: 600px;
  margin-top: 45px;
  margin-left: 150px;
  background-image: url("/landing/register.webp");
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 1500px) {
    display: none;
  }
`;

export const Wrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  perspective: 600px;
  transform-style: preserve-3d;
  justify-content: center;
  /* background-image: url("/landing/target3.jpeg"); */
  background-size: cover;
  background-repeat: no-repeat;
`;

export const SecondWrapper = styled.div`
  width: 30em;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  animation: ${(props: { fliped: boolean }) => (props.fliped ? flip : unFlip)}
    1s ease-out forwards;
`;

export const panel = styled.div`
  background-color: antiquewhite;
  width: 25em;
  height: 611px;
  position: absolute;
  transform-style: preserve-3d;
  min-height: 500px;
`;

export const BackFace = styled.div`
  width: 25em;
  /* opacity: 0.5; */
  font-weight: 600;
  position: absolute;
  transform-style: preserve-3d;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  animation: ${(props: { fliped: boolean }) => (props.fliped ? unFlip : flip)}
    0.5s ease-out forwards;
`;

export const ButtonBox = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
  animation: ${(props: { flip: boolean }) => (props.flip ? unFlip : flip)};
`;

export const BackFaceCancelButton = styled.div`
  transform: rotateY(180deg);
  :hover {
    color: #4e75ff;
    cursor: pointer;
  }
  animation: ${(props: { fliped: boolean }) => (props.fliped ? unFlip : flip)}
    1s ease-out forwards;
`;

export const Submit = styled.button`
  transform: rotateY(180deg);
  border: none;
  font-weight: 600;
  background-color: white;
  :hover {
    color: #4e75ff;
    cursor: pointer;
  }
  animation: ${(props: { fliped: boolean }) => (props.fliped ? unFlip : flip)}
    1s ease-out forwards;
`;

export const Head = styled.div`
  font-size: 40px;
  font-weight: 900;
  margin: 30px;
  backface-visibility: hidden;
`;

export const Line = styled.div`
  width: 30vw;
  border-top: 3px solid #4e75ff;
  margin: 20px 0;
`;

export const BottomLine = styled.div`
  width: 30vw;
  border-top: 3px solid #4e75ff;
  margin: 20px 0;
  animation: ${(props: { fliped: boolean }) =>
      props.fliped ? pullUp : pullDown}
    1s ease-out forwards;
`;

export const Body = styled.div`
  width: 20em;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  font-size: 15px;
  font-weight: 550;
`;

export const InputBox = styled.div``;

export const BodyInput = styled.input`
  height: 40px;
  border: none;
  border-bottom: 1px solid black;
  margin: 10px 0;
  color: black;
  outline: none;
`;

export const AuthInput = styled.input`
  width: 10em;
  align-items: center;
  opacity: 0;
  height: 40px;
  border: none;
  border-bottom: 1px solid black;
  margin: 10px 0;
  color: black;
  animation: ${(props: { sendAuth: boolean }) => props.sendAuth && appeared} 1s
    ease-out forwards;
`;

export const Error = styled.div`
  color: red;
  margin-bottom: 10px;
`;

export const AuthBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BodyButton = styled.div`
  width: 40%;
  height: 40px;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
  border: 1px solid #4e75ff;
  color: #4e75ff;
  cursor: pointer;
`;

export const Footer = styled.div`
  width: 25em;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 10px;
  backface-visibility: hidden;
  animation: ${(props: { fliped: boolean }) => (props.fliped ? flip : unFlip)}
    1s ease-out forwards;
`;

export const CancelButton = styled.div`
  width: 9em;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
  :hover {
    color: #4e75ff;
  }
`;

export const ConfirmButton = styled.div`
  width: 9em;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
  :hover {
    color: #4e75ff;
  }
`;

export const FooterButton = styled.button`
  width: 9em;
  height: 40px;
  border: none;
  background-color: white;
  cursor: pointer;
`;
