import KakaoMap from "../../../../commons/kakaomap";
import TagPage from "../../../../commons/tags";
import * as DB from "./DetailBody.styles";
import { Modal } from "antd";

interface Iprops {
  isModalVisible: boolean;
  showModal: () => void;
  handleOk: () => void;
  handleCancel: () => void;
}

export default function DetailBodyUI(props: Iprops) {
  return (
    <DB.Wrapper>
      <DB.Divedline />
      <DB.Title>구로점 쉐이키 1</DB.Title>
      {/* <DB.TagWrapper> */}
      {/* 태그 데이터 들어오면 맵으로 뿌려서 만들기. */}
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
      <DB.CommentHead>
        <DB.Title>후기</DB.Title>
        {/* 후기 등록시 모달창 import */}
        <DB.CommentBtn onClick={props.showModal}>후기등록</DB.CommentBtn>
        <Modal
          title="후기등록"
          visible={props.isModalVisible}
          onOk={props.handleOk}
          onCancel={props.handleCancel}
        >
          <DB.CommentInput placeholder="후기를 입력해주세요" />
        </Modal>
      </DB.CommentHead>
      <DB.CommentWrapper>
        <DB.CommentBox>
          <DB.Comment>
            <DB.SmallLabel>댓글1</DB.SmallLabel>
            <DB.Example>
              노원두 짱 노원두 짱 노원두 짱 노원두 짱 노원두 짱 노원두 짱 노원두
              짱 노원두 짱{" "}
            </DB.Example>
          </DB.Comment>
          <DB.Comment>
            <DB.SmallLabel>댓글1</DB.SmallLabel>
            <DB.Example>
              노원두 짱 노원두 짱 노원두 짱 노원두 짱 노원두 짱 노원두 짱 노원두
              짱 노원두 짱{" "}
            </DB.Example>
          </DB.Comment>
          <DB.Comment>
            <DB.SmallLabel>댓글1</DB.SmallLabel>
            <DB.Example>
              노원두 짱 노원두 짱 노원두 짱 노원두 짱 노원두 짱 노원두 짱 노원두
              짱 노원두 짱{" "}
            </DB.Example>
          </DB.Comment>
          <DB.Comment>
            <DB.SmallLabel>댓글1</DB.SmallLabel>
            <DB.Example>
              노원두 짱 노원두 짱 노원두 짱 노원두 짱 노원두 짱 노원두 짱 노원두
              짱 노원두 짱{" "}
            </DB.Example>
          </DB.Comment>
          <DB.Comment>
            <DB.SmallLabel>댓글1</DB.SmallLabel>
            <DB.Example>
              노원두 짱 노원두 짱 노원두 짱 노원두 짱 노원두 짱 노원두 짱 노원두
              짱 노원두 짱{" "}
            </DB.Example>
          </DB.Comment>
          <DB.Comment>
            <DB.SmallLabel>댓글1</DB.SmallLabel>
            <DB.Example>
              노원두 짱 노원두 짱 노원두 짱 노원두 짱 노원두 짱 노원두 짱 노원두
              짱 노원두 짱{" "}
            </DB.Example>
          </DB.Comment>
        </DB.CommentBox>
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
          <DB.SmallLabel>이용규칙</DB.SmallLabel>
          <DB.Example>
            체크인: 오후 3:00 이후 <br />
            체크아웃 시간: 오전 11:00 <br />
            키패드(으)로 셀프 체크인
            <br />
            흡연 금지
            <br />
            반려동물 동반 불가
          </DB.Example>
        </DB.ExampleWrapper>
        <DB.ExampleWrapper>
          <DB.SmallLabel>안전</DB.SmallLabel>
          <DB.Example>
            코로나19 방역 수칙을 준수하셔야 합니다. <br />
            화재경보기
          </DB.Example>
        </DB.ExampleWrapper>
        <DB.ExampleWrapper>
          <DB.SmallLabel>환불</DB.SmallLabel>
          <DB.Example>
            부분 환불: 체크인, 첫 1박을 제외한 나머지 숙박일에 대한 요금을
            환불받으실 수 있습니다. 첫 1박 요금과 서비스 수수료는 환불되지
            않습니다.
          </DB.Example>
        </DB.ExampleWrapper>
      </DB.PrecautionsWrapper>
    </DB.Wrapper>
  );
}
