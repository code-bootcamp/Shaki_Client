import * as Ad from "./AdminHeader.styles";

export default function AdminHeaderPage() {
  return (
    <Ad.Wrapper>
      <Ad.Body>
        <Ad.IconWrapper>
          <Ad.UserName> 💻 Administration</Ad.UserName>
        </Ad.IconWrapper>
      </Ad.Body>
    </Ad.Wrapper>
  );
}
