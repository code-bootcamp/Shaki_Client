import * as Ad from "./AdminHeader.styles";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export default function AdminHeaderPage() {
  const router = useRouter();

  const onClickMoveMain = () => {
    router.push(`/main`);
  };

  return (
    <Ad.Wrapper>
      <Ad.Body>
        <Ad.IconWrapper>
          <Ad.UserName> 💻 Administration</Ad.UserName>
          <Button
            onClick={onClickMoveMain}
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
