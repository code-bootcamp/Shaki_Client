import * as FA from "./FaqAdminHeader.styles";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export default function FaqAdminHeaderPage() {
  const router = useRouter();
  const onClickMain = () => {
    router.push("/main");
  };

  return (
    <FA.Wrapper>
      <FA.Body>
        <FA.IconWrapper>
          <FA.TitleWrapper>
            <FA.Icon />
            <FA.UserName> 1:1 문의센터</FA.UserName>
          </FA.TitleWrapper>
          <Button
            onClick={onClickMain}
            style={{
              width: "120px",
              height: "60px",
              marginTop: "12px",
              fontWeight: "900",
              color: "black",
            }}
            variant="text"
          >
            메인으로
          </Button>
        </FA.IconWrapper>
      </FA.Body>
    </FA.Wrapper>
  );
}
