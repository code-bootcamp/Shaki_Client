import KakaoMap from "../../../../commons/kakaomap";
import * as DB from "./DetailBody.styles";
import { Modal } from "antd";
import { Rate } from "antd";
import Dompurify from "dompurify";

interface Iprops {
  isModalVisible: boolean;
  showModal: () => void;
  handleOk: () => void;
  handleCancel: () => void;
  setStar: any;
  data: {
    fetchRoom: {
      name: string;
      remarks: string;
      contents: string;
      address: string;
    };
  };
  loadFunc: () => void;
}

export default function DetailBodyUI(props: Iprops) {
  return (
    <DB.Wrapper>
      <DB.Divedline />
      <DB.Title>{props.data?.fetchRoom.name}</DB.Title>
      <DB.TagWrapper>
        {props.data?.fetchRoom.tags.map((el, i) => (
          <DB.TagDiv key={i}>{el.tag}</DB.TagDiv>
        ))}
      </DB.TagWrapper>
      <DB.Divedline2 />
      <DB.ReservationText>
        무료취소는 예약 1일 전까지 가능합니다.
      </DB.ReservationText>
      <DB.Title>숙소 설명</DB.Title>
      <DB.SubTitle>{props.data?.fetchRoom.remarks}</DB.SubTitle>
      {typeof window !== "undefined" && (
        <DB.PrecautionsMenu
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(props.data?.fetchRoom.contents),
          }}
        />
      )}
      <DB.Divedline2 />
      <DB.CommentHead>
        <DB.Title>후기</DB.Title>
        <DB.CommentBtn onClick={props.showModal}>후기 등록</DB.CommentBtn>
        <Modal
          title="후기 등록하기"
          visible={props.isModalVisible}
          onOk={props.handleOk}
          onCancel={props.handleCancel}
          destroyOnClose={true}
        >
          {/* 별점 */}
          <Rate onChange={props.setStar} />
          <DB.CommentInput
            placeholder="후기를 입력해주세요"
            onChange={props.onChangeComment}
          />
        </Modal>
      </DB.CommentHead>
      <DB.CommentWrapper>
        <DB.CommentBox
          padStart={0}
          loadMore={props.loadFunc}
          hasMore={true}
          useWindow={true}
        >
          {props.reviewData?.fetchReviews.map((el, i) => (
            <DB.Comment key={el.id}>
              <DB.CommentTitle>
                <DB.SmallLabel>{el.user.name}</DB.SmallLabel>
                <Rate value={el.star} disabled />
              </DB.CommentTitle>
              <DB.Example>{el.content}</DB.Example>
            </DB.Comment>
          ))}
        </DB.CommentBox>
      </DB.CommentWrapper>
      <DB.Divedline2 />
      <DB.Title>지점 위치 정보 지역</DB.Title>
      <DB.KakaoMapWrapper>
        <KakaoMap address={props.data?.fetchRoom.address} />
      </DB.KakaoMapWrapper>
      <DB.Divedline2 />
      <DB.Title>알아두어야 할 사항</DB.Title>
      <DB.PrecautionsWrapper>
        <DB.ExampleWrapper>
          <DB.SmallLabel>이용규칙</DB.SmallLabel>
          <DB.Example>
            당일 예약 금지
            <br />
            30일이내 예약
            <br />
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
