import Landing1UI from "./landing1/Landing1.presenter";
import Landing2UI from "./landing2/Landing2.presenter";

export default function LandingPage() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Landing1UI />
      <Landing2UI />
    </div>
  );
}
