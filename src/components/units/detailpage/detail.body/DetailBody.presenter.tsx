import KakaoMap from "../../../../commons/kakaomap";
import * as DB from "./DetailBody.styles";

export default function DetailBodyUI() {
  return (
    <DB.Wrapper>
      <DB.Divedline />

      <DB.Title>구로점 쉐이키 1</DB.Title>
      <DB.SubTitle>
        깔끔하고 모던한 느낌으로 품격있는 식사를 하고 싶은 분들을 위한 룸입니다.
      </DB.SubTitle>
      <DB.Divedline2 />

      <DB.ReservationText>
        무료취소는 예약 1일 전까지 가능합니다.
      </DB.ReservationText>
      <DB.SmallLabel>예제</DB.SmallLabel>
      <DB.PrecautionsMenu>
        <div>숙소 편의 시설</div>
        <div>숙소 편의 시설2</div>
        <div>숙소 편의 시설3</div>
        <div>숙소 편의 시설4</div>
      </DB.PrecautionsMenu>
      <DB.SmallLabel>기타 주의사항</DB.SmallLabel>
      <div>
        실내에서의 흡연과 애완동물의 출입은 삼가해 주시면 감사하겠습니다.
      </div>
      <DB.Divedline2 />

      <DB.Title>후기</DB.Title>
      <DB.CommentWrapper>
        댓글 목록 map! 무한스크롤 쓸 건가요?, 페이지네이션 쓸건가요? height 값
        조심하세요
      </DB.CommentWrapper>
      <DB.Divedline2 />

      <DB.Title>지점 위치 정보 지역</DB.Title>
      <DB.KakaoMapWrapper>
        <KakaoMap />
      </DB.KakaoMapWrapper>

      <DB.Divedline2 />
      <DB.Title>알아두어야 할 사항</DB.Title>
      <DB.PrecautionsWrapper>
        <DB.ExampleWrapper>
          <DB.SmallLabel>예제1</DB.SmallLabel>
        </DB.ExampleWrapper>
        <DB.ExampleWrapper>
          <DB.SmallLabel>예제2</DB.SmallLabel>
        </DB.ExampleWrapper>
        <DB.ExampleWrapper>
          <div>
            <DB.SmallLabel>예제3</DB.SmallLabel>
            <div style={{ width: "100%", wordWrap: "break-word" }}>
              asdasdasdkjasdkjsahdkjashdkjsahdkasjhdksahdkasdhkj
            </div>
          </div>
        </DB.ExampleWrapper>
      </DB.PrecautionsWrapper>
    </DB.Wrapper>
  );
}
