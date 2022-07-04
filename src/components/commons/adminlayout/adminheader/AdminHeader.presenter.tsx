import * as Ad from "./AdminHeader.styles";
import Button from "@mui/material/Button";

export default function AdminHeaderPage() {
  return (
    <Ad.Wrapper>
      <Ad.Body>
        <Ad.IconWrapper>
          <Ad.UserName> 💻 Administration</Ad.UserName>
          <Button
            style={{
              width: "120px",
              height: "60px",
              marginTop: "12px",
              fontWeight: "900",
              color: "white",
            }}
            variant="text"
          >
            나가기
          </Button>
        </Ad.IconWrapper>
      </Ad.Body>
    </Ad.Wrapper>
  );
}
