import BannerPage from "./banner";
import FooterPage from "./footer";
import HeaderPage from "./header";
import NavigationPage from "./navigation";

export default function LayoutPage() {
  return (
    <div>
      <HeaderPage />
      <BannerPage />
      <NavigationPage />
      <FooterPage />
    </div>
  );
}
