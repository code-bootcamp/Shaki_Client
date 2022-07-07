import KakaoMap from "../../../../commons/kakaomap";
import TagPage from "../../../../commons/tags";
import * as DB from "./DetailBody.styles";

export default function DetailBodyUI() {
  return (
    <DB.Wrapper>
      <DB.Divedline />

      <DB.Title>구로점 쉐이키 1</DB.Title>
      {/* <DB.TagWrapper> */}
      <TagPage />
      {/* </DB.TagWrapper> */}
      <DB.Divedline2 />

      <DB.ReservationText>
        무료취소는 예약 1일 전까지 가능합니다.
      </DB.ReservationText>
      <DB.Title>Contents</DB.Title>
      <DB.SubTitle>
        Remarks: 깔끔하고 모던한 느낌으로 품격있는 식사를 하고 싶은 분들을 위한
        룸입니다.
      </DB.SubTitle>
      <DB.PrecautionsMenu>
        <div>Content 숙소 편의 시설</div>
        <div>Content 숙소 편의 시설2</div>
        <div>Content 숙소 편의 시설3</div>
        <div>Content 숙소 편의 시설4</div>
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
          <div>
            <DB.SmallLabel>이용규칙</DB.SmallLabel>
            <div style={{ width: "100%", wordWrap: "break-word" }}>
              체크인: 오후 3:00 이후 <br />
              체크아웃 시간: 오전 11:00 <br />
              키패드(으)로 셀프 체크인
              <br />
              흡연 금지
              <br />
              반려동물 동반 불가
            </div>
          </div>
        </DB.ExampleWrapper>
        <DB.ExampleWrapper>
          <div>
            <DB.SmallLabel>안전</DB.SmallLabel>
            <div style={{ width: "100%", wordWrap: "break-word" }}>
              코로나19 방역 수칙을 준수하셔야 합니다.
              <br />
              화재경보기
              <br />
            </div>
          </div>
        </DB.ExampleWrapper>
        <DB.ExampleWrapper>
          <div>
            <DB.SmallLabel>환불</DB.SmallLabel>
            <div style={{ width: "100%", wordWrap: "break-word" }}>
              부분 환불: 체크인, 첫 1박을 제외한 나머지 숙박일에 대한 요금을
              환불받으실 수 있습니다. 첫 1박 요금과 서비스 수수료는 환불되지
              않습니다.
            </div>
          </div>
        </DB.ExampleWrapper>
      </DB.PrecautionsWrapper>
    </DB.Wrapper>
  );
}
