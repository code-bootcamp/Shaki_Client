import * as Fa from "./FindAccount.Style";

export default function FindAccounPresenter(props: any) {
  return (
    <Fa.HTML>
      <Fa.Wrapper>
        <Fa.Head>{props.page ? "이메일찾기" : "비밀번호찾기"}</Fa.Head>

        {props.page ? (
          <Fa.Body>
            이름 <Fa.Name onChange={props.onChangeName} />
            번호 <Fa.Phone onChange={props.onChangeDigits} />
            <Fa.ButtonBox>
              <Fa.FindButton onClick={props.onClickFindEmail}>
                찾기
              </Fa.FindButton>
              <Fa.CancelButton onClick={props.onClickCancel}>
                취소
              </Fa.CancelButton>
            </Fa.ButtonBox>
          </Fa.Body>
        ) : (
          <Fa.Body>
            이름 <Fa.Name onChange={props.onChangeName} />
            이메일 <Fa.Email onChange={props.onChangeEmail} /> 번호
            <Fa.Phone onChange={props.onChangeDigits} />
            <Fa.ButtonBox>
              <Fa.FindButton onClick={props.onClickFindEmail}>
                찾기
              </Fa.FindButton>
              <Fa.CancelButton onClick={props.onClickCancel}>
                취소
              </Fa.CancelButton>
            </Fa.ButtonBox>
          </Fa.Body>
        )}

        <Fa.Footer>
          <Fa.FindEmail onClick={props.onClickEmailPage}>
            이메일찾기
          </Fa.FindEmail>
          <Fa.FindPwd onClick={props.onClickPwdPage}>비밀번호찾기</Fa.FindPwd>
        </Fa.Footer>
      </Fa.Wrapper>
    </Fa.HTML>
  );
}
