import { useRouter } from "next/router";
import * as Iq from "./Inquiry.Style";

export default function InquiryPresenter() {
  const router = useRouter();
  console.log(router);
  return (
    <Iq.HTML>
      <Iq.Wrapper>
        <Iq.Head>
          <Iq.HeadWrapper>
            <Iq.HeadTitle>쉐이키 헬프센터</Iq.HeadTitle>
            <Iq.HeadItem>궁금하신 것이 있나요?</Iq.HeadItem>
          </Iq.HeadWrapper>
          <Iq.Logo src="/sideImg/shakiRight.png" />
        </Iq.Head>
        <Iq.Body>
          <Iq.BodyUpperItem>안내</Iq.BodyUpperItem>
          <Iq.BodyUpperItem>사용법</Iq.BodyUpperItem>
          <Iq.BodyUnderItem>저작권, 운영정책</Iq.BodyUnderItem>
        </Iq.Body>
        <Iq.Footer>
          <Iq.FooterItem>
            자주묻는 질문
            <Iq.FooterInnerText>1번</Iq.FooterInnerText>
            <Iq.FooterInnerText>2번</Iq.FooterInnerText>
            <Iq.FooterInnerText>3번</Iq.FooterInnerText>
            <Iq.FooterInnerText>4번</Iq.FooterInnerText>
            <Iq.FooterInnerText>5번</Iq.FooterInnerText>
          </Iq.FooterItem>
          <Iq.FooterItem>...?</Iq.FooterItem>
        </Iq.Footer>
      </Iq.Wrapper>
    </Iq.HTML>
  );
}
