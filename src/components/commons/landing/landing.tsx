import Landing1UI from "./landing1/Landing1.presenter";
import Landing2UI from "./landing2/Landing2.presenter";
import styled from "@emotion/styled";

const DownButton = styled.div`
  position: absolute;
  width: 75px;
  height: 75px;
  bottom: -100px;
  left: 1450px;
  z-index: 5;
  /* background-color: white; */
  background-image: url("/landing/scrollArrow.png");
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;

const UpButton = styled.div`
  position: absolute;
  width: 75px;
  height: 75px;
  bottom: -4100px;
  left: 1450px;
  z-index: 5;
  /* background-color: white; */
  background-image: url("/landing/scrollArrow.png");
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;

export default function LandingPage() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Landing1UI />
      <DownButton />
      <Landing2UI />
      <UpButton />
    </div>
  );
}
