export default function LogInMobileButtonStyle() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#FEE500",
          borderRadius: "5px",
          width: "186px",
          height: "46px",
          display: "flex",
          flexDirection: "row",
          // justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "5px",
          color: "#191919",
          fontWeight: "600",
          fontSize: "15px",
        }}
      >
        <img
          src="/icon/sociallogin/screenshotAtUploadCC_1656926938552.jpeg"
          style={{ width: "30px", height: "30px", marginRight: "15px" }}
        />
        카카오로 시작하기
      </div>
      <div
        style={{
          backgroundColor: "#03c75a",
          borderRadius: "5px",
          width: "186px",
          height: "46px",
          display: "flex",
          flexDirection: "row",
          // justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "5px",
          color: "white",
          fontWeight: "600",
          fontSize: "15px",
        }}
      >
        <img
          src="/icon/sociallogin/screenshotAtUploadCC_1656920622973.jpeg"
          style={{ width: "30px", height: "30px", marginRight: "15px" }}
        />
        네이버로 시작하기
      </div>
      <img src="/icon/sociallogin/btn_google_signin_light_normal_web.png" />
    </>
  );
}
