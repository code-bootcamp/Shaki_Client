import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const flip = keyframes`
    from {
      transform: rotateY(0deg) translateZ(20px);
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

export const Wrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  perspective: 700px;
  transform-style: preserve-3d;
  animation: ${(props) => (props.fliped ? flip : unFlip)} 1s ease-out forwards;
`;

export const SecondWrapper = styled.div`
  width: 25em;
  background-color: beige;
  display: flex;
  flex-direction: column;
  align-items: center;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 20px);
  transform-style: preserve-3d;
  /* animation: ${(props) =>
    props.fliped ? flip : unFlip} 1s ease-out forwards; */
`;

export const panel = styled.div`
  background-color: antiquewhite;
  width: 25em;
  height: 611px;
  position: absolute;
  transform-style: preserve-3d;
  min-height: 500px;
  /* animation: ${(props) =>
    props.fliped ? flip : unFlip} 1s ease-out forwards; */
`;

export const BackFace = styled.div`
  background-color: aqua;
  width: 25em;
  height: 611px;
  opacity: 0.1;
  position: absolute;
  transform-style: preserve-3d;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  /* animation: ${(props) =>
    props.fliped ? unFlip : flip} 1s ease-out forwards; */
`;

export const Head = styled.div`
  font-size: 40px;
`;

export const Body = styled.div`
  width: 20em;
  display: flex;
  flex-direction: column;
  /* border-bottom: 2px solid black; */
  padding-bottom: 20px;
`;

export const BodyInput = styled.input`
  height: 40px;
`;

export const BodyButton = styled.button``;

export const Phone = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const Footer = styled.div`
  width: 25em;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-top: 3px solid gray;
  padding-top: 10px;
`;

export const FooterButton = styled.button`
  width: 9em;
  height: 40px;
`;
