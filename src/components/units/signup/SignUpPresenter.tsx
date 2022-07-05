import { EventHandler, useState } from "react";
import * as Su from "./SignUpStyle";

export default function SignUpPresenter(props: any) {
  const [fliped, setFliped] = useState<boolean>();
  const onClickFliped = (event: React.MouseEvent<HTMLDivElement>) => {
    setFliped((prev) => !prev);
    console.log(fliped);
  };
  return (
    <Su.Wrapper fliped={fliped} onSubmit={props.handleSubmit()}>
      <Su.SecondWrapper fliped={fliped}>
        <Su.Head>회원가입</Su.Head>
        <Su.Body>
          닉네임
          <Su.BodyInput type="text" {...props.register("name")} />
          이메일
          <Su.BodyInput type="password" {...props.register("password")} />
          비밀번호
          <Su.BodyInput type="password" />
          비밀번호확인
          <Su.BodyInput type="text" {...props.register("phoneNumber")} />
          휴대폰 인증
          <Su.Phone>
            <Su.BodyInput
              style={{ marginRight: "10px" }}
              type="text"
              {...props.register("authentication")}
            />
            <Su.BodyButton>인증번호 받기</Su.BodyButton>
          </Su.Phone>
          <Su.Phone>
            <Su.BodyInput style={{ marginRight: "10px" }} />
            <Su.BodyButton>인증</Su.BodyButton>
          </Su.Phone>
        </Su.Body>
        <Su.Footer>
          <div onClick={onClickFliped}>click</div>
          <Su.FooterButton>Button 1</Su.FooterButton>
          <Su.FooterButton>Button 2</Su.FooterButton>
        </Su.Footer>
      </Su.SecondWrapper>
      {/* <Su.panel></Su.panel> */}
      <Su.BackFace fliped={fliped}>
        회원가입이완료되었습니다.
        <div onClick={onClickFliped}>click</div>
      </Su.BackFace>
    </Su.Wrapper>
  );
}
