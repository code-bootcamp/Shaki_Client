import Checkbox from "@mui/material/Checkbox";

export default function SecurityTxt(props: any) {
  return (
    <>
      <h2 style={{ backgroundColor: "white" }}>
        ✓필수 개인정보 수집 이용동의 *
      </h2>
      <a>
        쉐이키는 이용자 문의를 처리하기 위해 다음과 같이 개인정보를 수집 및
        이용하여, 이를 위한 최소한의 개인정보이므로 동의를 해주셔야 처리가
        가능합니다.
      </a>
      <a>-수집항목</a>
      <a>✓이메일 주소, 문의 제목 및 내용, 이름, 회원번호/비회원은 제외</a>
      <a>-수집목적: 문의요청 불편사항 확인 및 처리결과 회신</a>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "230px",
          height: "20px",
          backgroundColor: "yellow",
          color: "black",
        }}
      >
        -보유기간: 3년간 보관 후 지체없이 파기
      </div>
      <a>
        위 동의를 거부 할 권리가 있으며, 동의를 거부하실 경우 문의 접수가
        제한됩니다.
      </a>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ marginTop: "7px", color: "black" }}>
          개인정보 수집내용동의
        </div>
        <Checkbox
          checked={props.checked}
          onChange={props.handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
    </>
  );
}
