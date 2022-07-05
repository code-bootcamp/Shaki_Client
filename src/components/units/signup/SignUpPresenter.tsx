import * as Su from "./SignUpStyle";

export default function SignUpPresenter(props: any) {
  return (
    <Su.Wrapper onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <Su.Head>회원가입</Su.Head>
      <Su.Line />
      <Su.SecondWrapper fliped={props.fliped}>
        <Su.Body>
          이름
          <Su.BodyInput type="text" {...props.register("name")} />
          <Su.Error>{props.formState.errors.name?.message}</Su.Error>
          ID
          <Su.BodyInput type="text" {...props.register("id")} />
          <Su.Error>{props.formState.errors.id?.message}</Su.Error>
          이메일
          <Su.BodyInput type="text" {...props.register("email")} />
          <Su.Error>{props.formState.errors.email?.message}</Su.Error>
          비밀번호
          <Su.BodyInput type="password" {...props.register("pwd")} />
          <Su.Error>{props.formState.errors.pwd?.message}</Su.Error>
          비밀번호확인
          <Su.BodyInput type="text" />
          휴대폰 인증
          <Su.Phone>
            <Su.BodyInput
              style={{ marginRight: "10px" }}
              type="text"
              {...props.register("phone_num")}
            />
            <Su.BodyButton>인증번호 받기</Su.BodyButton>
          </Su.Phone>
          <Su.Phone>
            <Su.BodyInput style={{ marginRight: "10px" }} />
            <Su.BodyButton>인증</Su.BodyButton>
          </Su.Phone>
        </Su.Body>
      </Su.SecondWrapper>
      <Su.BottomLine fliped={props.fliped} />
      <Su.Footer fliped={props.fliped}>
        <Su.CancelButton onClick={props.onClickMoveToLanding}>
          뒤로가기
        </Su.CancelButton>
        <Su.ConfirmButton onClick={props.onClickFliped}>입력</Su.ConfirmButton>
      </Su.Footer>
      <Su.BackFace fliped={props.fliped}>
        기입하신 정보로 회원가입이 진행됩니다.
        <Su.ButtonBox flip={props.flip}>
          <Su.BackFaceCancelButton
            fliped={props.fliped}
            onClick={props.onClickFliped}
          >
            정보수정
          </Su.BackFaceCancelButton>
          <Su.Submit fliped={props.fliped}>회원가입</Su.Submit>
        </Su.ButtonBox>
      </Su.BackFace>
    </Su.Wrapper>
  );
}
