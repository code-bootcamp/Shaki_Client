import * as Su from "./SignUp.Style";

export default function SignUpPresenter(props: any) {
  return (
    <Su.WrapperRoot>
      <Su.WrapperImg />
      <Su.Wrapper onSubmit={props.handleSubmit(props.onClickSubmit)}>
        <Su.Head>Register</Su.Head>
        <Su.Line />
        <Su.SecondWrapper fliped={props.fliped}>
          <Su.Body>
            이름
            <Su.BodyInput type="text" {...props.register("name")} />
            <Su.Error>{props.formState.errors.name?.message}</Su.Error>
            이메일
            <Su.BodyInput type="text" onChange={props.onChangeEmail} />
            <Su.AuthBox>
              <Su.BodyButton
                onClick={
                  props.sendAuth ? props.onClickAuthed : props.onClickSendAuth
                }
              >
                {props.sendAuth ? "인증" : "인증번호 발송"}
              </Su.BodyButton>
              <Su.AuthInput
                placeholder="인증번호"
                onChange={props.onChangeEmailAuth}
                sendAuth={props.sendAuth}
              />
            </Su.AuthBox>
            <Su.Error>{props.formState.errors.email?.message}</Su.Error>
            비밀번호
            <Su.BodyInput type="password" {...props.register("pwd")} />
            <Su.Error>{props.formState.errors.pwd?.message}</Su.Error>
            비밀번호확인
            <Su.BodyInput type="password" />
            휴대폰
            <Su.BodyInput type="text" {...props.register("phone_num")} />
            <Su.Error>{props.formState.errors.phone_num?.message}</Su.Error>
          </Su.Body>
        </Su.SecondWrapper>
        <Su.BottomLine fliped={props.fliped} />
        <Su.Footer fliped={props.fliped}>
          <Su.CancelButton onClick={props.onClickMoveToLanding}>
            뒤로가기
          </Su.CancelButton>
          <Su.ConfirmButton onClick={props.onClickFliped}>
            입력
          </Su.ConfirmButton>
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
    </Su.WrapperRoot>
  );
}
