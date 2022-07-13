import * as Fa from "./FindAccount.Style";

export default function FindAccounPresenter(props: any) {
  return (
    <Fa.HTML>
      <Fa.Wrapper>
        <Fa.Head>아이디 찾기</Fa.Head>
        <Fa.Body>
          이름 <Fa.Name onChange={props.onChangeName} />
          번호 <Fa.Phone onChange={props.onChangeDigits} />
          <Fa.FindButton onClick={props.onClickShowEmail}>찾기</Fa.FindButton>
        </Fa.Body>

        <Fa.Footer>
          <Fa.FindEmail>이메일찾기</Fa.FindEmail>
          <Fa.FindPwd>비밀번호찾기</Fa.FindPwd>
        </Fa.Footer>
      </Fa.Wrapper>
    </Fa.HTML>
  );
}
